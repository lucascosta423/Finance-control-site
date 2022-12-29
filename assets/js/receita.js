const baseUrl = "http://localhost:8080";
const tbody = document.getElementById("tbody");
const perfilUser2 = document.getElementById("perfilUser");
const modal = document.getElementById("modal-creat")

window.onload = async () => {
    const { data } = await getAllIncomes("/painel/income");
    if (data) {
        perfilUser(perfilUser2);
        insertRowsInTable(data,tbody);
        modalAtualizarRow(modal)
    }
}

async function getAllIncomes(rota) {
    try {
        const request = await axios.get(baseUrl + rota);
        if (request) {
            return request;
        }
    } catch (e) {
        if(e.message == "Network Error"){
            alert("Sem conexão com o Servidor");
        }
        if(e.message == 'Request failed with status code 404'){
            console.log("Sem Dados no banco")
        }
    }
}

function insertRowsInTable(data,elementHtml) {
    let row = "";

    data.forEach(element => {
        row += `<tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>${element.category.name}</td>
        <td>${element.incomeValue}</td>
        <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#atualizar">Atualizar</button></td>
        <td><button type="button" class="btn btn-danger" id="deleteAll">Deletar</button></td>
        </tr>`;
    });
    elementHtml.innerHTML = row;
    
    //Deletar Receitas
    
    const deleteAll = document.getElementById("deleteAll")

    deleteAll.addEventListener('click',() => {
        deleteRowsInTable()
                
    }) 
}


function deleteRowsInTable(){
    const tbody = document.getElementById("tbody");
    const linhas = tbody.getElementsByTagName("tr");

    for(let i = 0; i < linhas.length; i++){

        let linha = linhas[i];
        if(linha.classList)
        linha.classList.add("selecionado")
    }
}


function modalAtualizarRow(elementHtml){

    const tbody = document.getElementById("tbody");
    const linhas = tbody.getElementsByTagName("tr");

    for(let i = 0; i < linhas.length; i++){

        let linha = linhas[i];

        linha.addEventListener("click", () => {
            
        }) 
    }



    // Creat Modal

    elementHtml.innerHTML += `
    <form>
        <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" class="form-control" id="titleModel" aria-describedby="titleHelp"
                placeholder="Informe aqui">
        </div>
        <div class="form-group">
            <label for="valueIncome">Valor da receita</label>
            <input type="number" class="form-control" id="valueIncomeModel" step="0.01" name="valueIncome"
                min="0.01">
        </div>
        <div class="form-group" style="margin-top: 1vh;">
            <label for="category">Selecione a Categoria</label>
            <select name="category" id="categoryModel" class="form-control" style="text-align: center;">
            </select>
        </div>
        <div class="form-group">
            <label for="description">Descrição</label>
            <textarea class="form-control" id="descriptionModel" rows="3"></textarea>
        </div>
    </form>
    `

    // iNSERT DAS CATEGORY NA MODEL
    const categorylistMoldel = document.getElementById("categoryModel");
    axios.get(baseUrl + "/painel/category")
        .then((result) => {
            let option = "";
            // console.log(result)
            result.data.forEach(element => {
                option += `
                    <option value="${element.id}">${element.name}</option>
                `;
            });
            categorylistMoldel.innerHTML = option;
        }).catch((err) => {
            console.log(err);
        });
}