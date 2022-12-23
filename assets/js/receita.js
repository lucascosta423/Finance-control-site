
const tbody = document.getElementById("tbody");
const perfilUser2 = document.getElementById("perfilUser");


window.onload = async () => {
    const { data } = await getAllIncomes("/painel/income");
    if (data) {
        // console.log(data);
        perfilUser(perfilUser2);
        insertRowsInTable(data,tbody);
    }
}