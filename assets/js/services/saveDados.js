

async function addIncome(income = {}) {
    try {
        console.log(income);
        const request = await axios.post(baseUrl + "/painel/income/save", income);
        if (request) {
            // console.log(request);
            alert("Receita cadastrada com sucesso!");
            window.location.reload();
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
    let income = {
        title: title.value,
        description: description.value,
        value: valueIncome.value
    }
    await addIncome(income);
})
