// explorando os tipos de dados em JS
let fruta = "maçã"
let primeiroNumero = 5.6
let segundoNumero = 10


// verificando o tipo de dados das váriaveis
var tipo = typeof fruta // "String"
console.log(tipo)
tipo = typeof primeiroNumero // Number
console.log(tipo)


// A Variavel "animal" não foi definida, então o tipo e "undefined"
let animal;
tipo = typeof animal // indefinido
console.log(tipo)

// A variavel "verdadeiro", é um boolean, então é do tipo "boolean"
let verdadeiro = true
tipo = typeof verdadeiro // boolean
console.log(tipo)


// Convertendo de Float para Int
let segundoNum = parseInt(primeiroNumero) // Converte o Número para inteiro
console.log(segundoNum) // 5

// Convertendo de Int para Float
num = 5.5
let numAle = typeof(parseFloat(num))
console.log(numAle)





// Se inserirmos palavras, ele volta um Nan (Not a number)
var sla = parseInt("Nome")
console.log(sla) // NaN
