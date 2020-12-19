function Logar() {
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if (usuario.value == "" || senha.value == "") {
        alert("Preencha todos os campos")
    } else {
        localStorage.setItem("logado", 1)
        window.location.href = "jogodavelha.html"
    }
}