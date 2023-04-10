// FAZENDO COPIA DE UM PRODUTO
const produto = {
    nome: 'Caneca',
    preco: 1.8
}

// const outraCoisa = produto; // outraCoisa e produto apontam pro mesmo local na memória
// fazendo uma copia de produto pra variavel outraCoisa:
const outraCoisa = { ...produto }; // spread operator
const caneca = Object.assign({}, produto, { material: 'Porcelana' }); // copiando tudo de produto pra variavel caneca

console.log(produto);
/*
const produto = {
    nome: 'Caneca',
    preco: 1.8
}
*/
console.log(outraCoisa);
console.log(caneca); 
/*
const caneca = {
    nome: 'Caneca',
    preco: 1.8
    material: 'Porcelana'
}
*/

//Object.getOwnPropertyDescriptor():
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
/*
{
    value: 'Produto',
    writable: true,
    enumerable: true,
    configurable: true,
}
*/

