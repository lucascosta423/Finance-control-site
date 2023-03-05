const baseUrl = "http://localhost:8080";
const tbody = document.getElementById("tbody");
const perfilUser2 = document.getElementById("perfilUser");

perfilUser(perfilUser2);

window.onload = async () => {
    const { data } = await getAllIncomes("/painel/income");
    if (data) {
        
        insertRowsInTable(data,tbody);
        geraGraficos(data)
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
    if(data.length > 5){
        document.querySelector(".table-css").style.height = "22rem";
    }
    //Deletar Receitas
    const btnDel = document.querySelectorAll(".deleteAll");
    deleteRowInTable(btnDel)
    
    //Atualizar Receita
    const btnUpd = document.querySelectorAll(".updateAll");
    atualizarReceitasDespesas(btnUpd)
}




const ctx = document.getElementById("dadosPorCategorias")
    
// new Chart(ctx,{
//     type: 'doughnut',
//     data: {
//     labels: ,
//     datasets: [{
//             data: tes[1],
//             backgroundColor: coresGrafico,
//             hoverOffset: 4
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: false,
//                 position: 'left',
//             }
//         }
//     }
// });
// let coresGrafico = [
//     'rgb(255, 99, 132)',
//     'rgb(54, 162, 235)',
//     'rgb(255, 205, 86)',
//     'rgb(0 205 102)',
//     'rgb(255 185 15)',
//     'rgb(178 58 238)',
//     'rgb(0 191 255)',
//     'rgb(0 229 238)',
//     'rgb(178 34 34)',
//     'rgb(245 222 179)',
//     'rgb(218 165 32)',
    
//     ]