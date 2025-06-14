/*let nome = "Ediley"
function saudacao() {
    alert(`Olá, ${nome}!`)
}

saudacao()*/

/*function apresentacao() {
    let nome = "Ediley"
    console.log(`Olá, ${nome}!`)
}

apresentacao()
console.log(nome) // ReferenceError: nome is not defined */

function apresentandoAlguem() {
    let nome = "Ediley"
    function saudacao() {
        console.log(`Olá, ${nome}!`)
    }
    function despedida() {
        console.log (`Até mais, ${nome}!`)
    }
    return {
        saudacao: saudacao,
        despedida: despedida
    }
}
let pessoa = apresentandoAlguem()
pessoa.saudacao() // Olá, Ediley!
pessoa.despedida() // Até mais, Ediley!
// console.log(nome) // ReferenceError: nome is not defined