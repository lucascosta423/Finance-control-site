
//Save

async function addIncome(income = {}) {
    try {
        const request = await axios.post(baseUrl + "/painel/income/save", income);
        if (request) {
            // console.log(request);
            alert("Receita cadastrada com sucesso!");
            location.reload();
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
            if(event.target){
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

function atualizarModal(valueUpdate){

    const catgoryinsertModel = document.querySelectorAll(".categoryIncome")
    const categoryModel = document.getElementById("categoryModel")
    
    valueUpdate.forEach(button => {
        button.addEventListener("click",(event) => {
           
            const titleModel = document.getElementById("titleModel");
            const valueIncomeModel  = document.getElementById("valueIncomeModel");
            const descriptionModel = document.getElementById("descriptionModel");

           

            
            
            if(event.target){
                const row = button.parentNode.parentNode;
                //Insert dos values na model
                titleModel.value = row.children[1].textContent;
                descriptionModel.value = row.children[2].textContent;
                //insert da option com a categoria atual
                categoryModel.appendChild(new Option(row.children[3].textContent, row.children[0].textContent));
                //insert das categorias na model
                catgoryinsertModel.forEach(option => {
                    categoryModel.appendChild(new Option(option.textContent,option.value)).classList.add('categoryModel');
                })
                //remove da option com o mesmo value e name da row selecionada
                document.querySelectorAll(".categoryModel").forEach(optionModel =>{
                    if(optionModel.textContent === row.children[3].textContent){
                        optionModel.classList.add('teste')
                    } 
                })
                valueIncomeModel.value = row.children[4].textContent;
            }
        })
    });
}