async function addIncome(dados = {},rota) {
    try {
        const request = await axios.post(baseUrl + `/painel/${rota}/save`, dados);
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
    await addIncome(income,"income");
})