/*// Função que recebe o ano atual e retorna a idade de uma pessoa
function descobrirIdade(anoNascimento) {
    return 2025 - anoNascimento;
}
descobrirIdade(2006)
console.log(descobrirIdade(2006)); // 19


// Função que recebe três números e retorna a soma deles
function somarNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(somarNumeros(10, 40, 90));// 140

// Função que recebe dois números e retorna o maior deles
num1 = Number(5);
num2 = Number(21);
function maiorNumero(num1, num2) {
    
} */



function somarNumeros(num1, num2, num3) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    var res = document.getElementById("resultado");
    let resultado = num1 + num2 + num3
    return res.innerHTML = `E o Resultado de ${num1} + ${num2} + ${num3} é...: <strong>${resultado}</strong>`;;
    
}
res.innerHTML = `E o Resultado de ${num1} + ${num2} + ${num3} é: <strong>${somarNumeros(Number(num1), Number(num2), Number(num3))}</strong>`;



