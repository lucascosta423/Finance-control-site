const categorylist = document.getElementById("category");

axios.get(baseUrl + "/painel/category")
    .then((result) => {
        let option = "";
        // console.log(result)
        result.data.forEach(element => {
            option += `
                <option value="${element.id}">${element.name}</option>
            `;
        });
        categorylist.innerHTML = option;
    }).catch((err) => {
        console.log(err);
    });

