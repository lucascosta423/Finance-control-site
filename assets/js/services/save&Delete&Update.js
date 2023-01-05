
//Save

async function addIncome(income = {}) {
    try {
        const request = await axios.post(baseUrl + "/painel/income/save", income);
        if (request) {
            // console.log(request);
            alert("Receita cadastrada com sucesso!");
            location.reload();
            document.getElementById("title").value = '';
            document.getElementById("description").value = '';
            document.getElementById("valueIncome").value = '';
           
        }
    } catch (e) {
        console.log(e);
        alert("Falha ao cadastrar receita");
        
    }
}

document.getElementById("addIncome").addEventListener("click", async () => {

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const valueIncome = document.getElementById("valueIncome");
    const categorylist = document.getElementById("category");
    

    let categoryOption = categorylist.options[categorylist.selectedIndex].value;

    let income = {
        title: title.value,
        description: description.value,
        value: valueIncome.value,
        categoryId: categoryOption
    }
    await addIncome(income);
})

//Delete

function deleteRowInTable(idButtonDelete) {
    idButtonDelete.forEach(button => {
        button.addEventListener("click",(event) => {
            if(event.target === button){
                const Row = button.parentNode.parentNode;
                const idRow = Row.children[0].textContent;
               
                let confirmeDel = confirm("Deseja realmente deletar a receita?")
                if(confirmeDel){
                    axios.delete(baseUrl + `/painel/income/delete/${idRow}`)
                    alert("Receita Deletada com sucesso")
                    location.reload()
                }

            }
        })
    });
}

//Update

function atualizarModal(btnUpdate){

    const catgoryinsertModel = document.querySelectorAll(".categoryIncome")
    const categoryModel = document.getElementById("categoryModel")
    
    btnUpdate.forEach(button => {
        button.addEventListener("click",(event) => {
           
            const titleModel = document.getElementById("titleModel");
            const valueIncomeModel  = document.getElementById("valueIncomeModel");
            const descriptionModel = document.getElementById("descriptionModel");

            if(event.target){
                const row = button.parentNode.parentNode;
                //Insert dos values na model
                console.log(row);
                titleModel.value = row.children[1].textContent;
                descriptionModel.value = row.children[2].textContent;

                //insert da option com a categoria atual
                categoryModel.innerHTML = `<option value="${row.children[0].textContent}">${row.children[3].textContent}</option>`;

                //insert das categorias na model
                catgoryinsertModel.forEach(option => {
                    categoryModel.appendChild(new Option(option.textContent,option.value)).classList.add('categoryModel');
                })

                //remove da option com o mesmo value e name da row selecionada
                document.querySelectorAll(".categoryModel").forEach(optionModel =>{
                    if(optionModel.textContent === row.children[3].textContent){
                        optionModel.classList.add('removerOption')
                    } 
                })
                valueIncomeModel.value = row.children[5].textContent;
                
                //Atualizando a Row
                const btnUpdateDataModel = document.querySelector(".atualizarRowModal");
                btnUpdateDataModel.addEventListener("click",(event) => {
                    let categorySelectInOption = categoryModel.options[categoryModel.selectedIndex]
                    
                    if(categorySelectInOption.textContent == row.children[3].textContent){
                        categorySelectInOption = row.children[4].textContent;
                    }else{
                        categorySelectInOption = categorySelectInOption.value
                    }
                    
                    if(event.target){
                        console.log(parseFloat(valueIncomeModel.value));
                        let incomeUpdate = {
                            title: titleModel.value,
                            description: descriptionModel.value,
                            categoryId: parseInt(categorySelectInOption),
                            value: parseFloat(valueIncomeModel.value)
                        }
                        axios.put(`${baseUrl}/painel/income/update/${parseInt(row.children[0].textContent)}`,incomeUpdate)
                            .then((result) => {
                                if(result.status == 200) location.reload()
                            }).catch((err) => {
                                console.log(err)
                            });
                    }
                   
                })
            }
        })
    });
}
