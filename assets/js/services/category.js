const categorylist = document.getElementById("category");


axios.get(baseUrl + "/painel/category")
    .then((result) => {
        
        result.data.forEach(element => {
            categorylist.appendChild(new Option(element.name, element.id)).classList.add('categoryIncome')
        });
        
    }).catch((err) => {
        console.log(err);
});

//Moldel

