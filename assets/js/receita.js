const baseUrl = "http://localhost:8080";
const tbody = document.getElementById("tbody");
const perfilUser2 = document.getElementById("perfilUser");

window.onload = async () => {
    const { data } = await getAllIncomes("/painel/income");
    if (data) {
        perfilUser(perfilUser2);
        insertRowsInTable(data,tbody);
       
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
        <td hidden>${element.category.id}</td>
        <td>${element.incomeValue}</td>
        <td>
            <button type="button" class="btn btn-primary updateAll" data-bs-toggle="modal" data-bs-target="#atualizar">Atualizar</button>
            <button type="button" class="btn btn-danger deleteAll">Deletar</button>
        </td>
        </tr>`;
    });
    elementHtml.innerHTML = row;
    console.log(data)
    if(data.length > 5){
        document.querySelector(".table-css").style.height = "35vh";
    }
    //Deletar Receitas
    const btnDel = document.querySelectorAll(".deleteAll");
    deleteRowInTable(btnDel)
    
    //Atualizar Receita
    const btnUpd = document.querySelectorAll(".updateAll");
    atualizarReceitasDespesas(btnUpd)

}

