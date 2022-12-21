const tbody = document.getElementById("tbody");
let row = "";


window.onload = async () => {
    const { data } = await getAllIncomes("/painel/income");
    if (data) {
        console.log(data);
        insertRowsInTable(data,row,tbody);
    }
}






