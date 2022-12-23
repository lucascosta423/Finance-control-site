const baseUrl = "http://localhost:8080";


function insertRowsInTable(data,elementHtml) {
    let row = "";

    data.forEach(element => {
        row += `<tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>${element.category.name}</td>
        <td>${element.incomeValue}</td>
        <td><a class="btn btn-primary">Atualizar</a></td>
        <td><a class="btn btn-danger">Deletar</a></td>
        </tr>`;
    });
    elementHtml.innerHTML = row;
}
async function getAllIncomes(rota) {
    try {
        const request = await axios.get(baseUrl + rota);
        if (request) {
            return request;
        }
    } catch (e) {
        console.log(e);
        if(e.message == "Network Error"){
            alert("Sem conexão com o Servidor");
        }
    }
}