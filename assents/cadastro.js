const cep = document.querySelector("#cep")
const localidade = document.querySelector("#localidade")
const bairro = document.querySelector("#bairro")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];

        }

    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search)
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(response => response.json()
            .then(data => showData(data)))

})