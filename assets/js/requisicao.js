
function requisicao(rota){
    axios.get(`http://localhost:8080/painel/${rota}`)
        .then((result) => {
            console.log(result);
            const {data} = result;
            if(data){
                return data
            }
        }).catch((err) => {
            return err
        });
}

