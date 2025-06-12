// Criando uma lista de matérias
// e acessando seus elementos
const listaDeMaterias = ['HTML', 'CSS', 'JavaScript']
console.log(listaDeMaterias[0]) // HTML 
console.log(listaDeMaterias[1]) // CSS
console.log(listaDeMaterias[2]) // JavaScript

// Acessando o tamanho da lista e o último elemento
console.log(listaDeMaterias.length) //Para descobrir o tamanho da lista
console.log(listaDeMaterias[3]) // undefined, pois não existe o índice 3
console.log(listaDeMaterias[listaDeMaterias.length - 1]) // JavaScript, o último elemento da lista


// Adicionando um novo elemento ao final da lista
console.log(listaDeMaterias.push('JQuery')) // Adiciona 'JQuery' ao final da lista
console.log(listaDeMaterias) // ['HTML', 'CSS', 'JavaScript', 'JQuery']

// Removendo o último elemento da lista
console.log(listaDeMaterias.splice(1,1)) // Remove o último elemento da lista
console.log(listaDeMaterias) // ['HTML', 'JavaScript', 'JQuery']

console.log(listaDeMaterias.length ) // 3, o tamanho da lista após a remoção   


