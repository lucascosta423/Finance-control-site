
function gerarDados(idName){

    
    let row = "";
        data.forEach(idName => {
            row += `
                <tr class="table-dark">
                    <th scoped="roiw">${idName.id}</th>
                    <td>${idName.title}</td>
                    <td>${idName.expenseValue}</td>
                    <td>${idName.description}</td>
                    <td><a href="/update/${idName.id}">Editar</a></td>
                    <td><a href="/update/${idName.id}">Excluir</a></td>
                </tr> `;
        });
        contentData.innerHTML = row;
    
}