let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let email = document.getElementById("email")

let res = document.getElementById("paragrafo")

function enviar() {
    let nomeValue = nome.value
    let idadeValue = idade.value
    let emailValue = email.value
    
    res.innerHTML = `Olá, ${nomeValue}! Você tem ${idadeValue} anos e seu email é ${emailValue}.`
    res.style.display = "block"
}