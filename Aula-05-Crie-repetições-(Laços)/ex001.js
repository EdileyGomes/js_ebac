// Exemplo de laço for

// Criando uma lista de nomes
let nomes = ["Maria", "José", "João"]
console.log(nomes[2])

// Percorrendo a lista de nomes com um laço for
for (let i = 0; i < nomes.length; i++) {
    console.log("Nome é: " + nomes[i])
}

// Percorrendo a lista de nomes com um laço while
let saudacoes = 0
while (saudacoes < nomes.length){
    console.log("O nome é: " + nomes[saudacoes])
    saudacoes = saudacoes + 1
}