// Função para descobrir a idade de uma pessoa com base no ano de nascimento
/*function descobrirIdade(anoNascimento) {
    return 2025 - anoNascimento
}

var idade = Number(descobrirIdade(2006))
console.log(idade) */

// Função para somar três números


//peça o número para os usuários e armazenar em variáveis
var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var num3 = prompt("Digite o terceiro número:");
function somarNumeros() {
    //convertendo para números
    num1 = Number(num1)
    num2 = Number(num2)
    num3 = Number(num3)

    //some os valores
    var soma = num1 + num2 + num3;
    window.alert(`A soma dos números ${num1} + ${num2} + ${num3} = ${soma}`)
}

somarNumeros()

