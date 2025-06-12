// Exemplo de uso de condicionais em JavaScript
// Solicita ao usuário que insira sua idade
let idade = prompt('Bem-vindo ao Cadastramento eleitoral! Digite sua idade: ')

// Convertendo a entrada para um número inteiro
if (idade >= 16) {
    alert('Você já pode se Cadastrar para votar!')
} else {
    alert(`Você tem ${idade} anos de idade, e ainda não tem direito ao voto!`)
}

// Operadores Ternários
// Exemplo de operador ternário
//let idade = prompt('Bem-vindo ao Cadastramento eleitoral! Digite sua idade: ')
const resultado = idade >= 16 ? 'Você já pode votar' : 'Você ainda não pode votar'

// Exibe o resultado usando window.alert
window.alert(resultado)