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