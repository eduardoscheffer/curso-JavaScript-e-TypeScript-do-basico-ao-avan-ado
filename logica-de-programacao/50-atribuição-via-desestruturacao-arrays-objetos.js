// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM ARRAYS:
let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a ,b, c); // 1 2 3

const numbers = [11, 12, 14, 13, 15, 15, 18, 19, 20];
const [primeiroNumero, segundoNumero, ...resto] = numbers;
// console.log(primeiroNumero, segundoNumero, resto); // 11 12 [14, 13, 15, 15, 18, 19, 20]

const [onze, , quatorze, ...rest] = numbers
console.log(onze, quatorze, rest); // 11 14 [13, 15, 15, 18, 19, 20]
// -----------------------------------------------------------------------------------------------------//

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM OBJETOS:
const homem = {
    nome: 'Ragnar',
    sobrenome: 'LothBrock',
    idade: 25,
    endereco: {
        rua: 'Valhalla',
        numero: 1602
    }
}

const { nome: variavelProNome = 'Fallback caso não existir', sobrenome: variavelProSobrenome, idade: variavelPraIdade = 20,  endereco: { rua: r = 123, numero }, endereco: enderecoCompleto } = homem; // atribuição via desestruturação // 
console.log(variavelProNome, variavelProSobrenome, variavelPraIdade); // Ragnar Lothbrock 25
console.log(r, numero, enderecoCompleto); // Valhalla 1602 endereco: { rua: 'Valhalla', numero: 1602 }


const mulher = {
    nome: 'Lagartha',
    sobrenome: 'Lothbrock',
    idade: 24,
    endereco: {
        rua: 'Valhalla02',
        numero: 1663
    }
}

const { nome: nomeDaMulher = 'Fulana', ...endereco } = mulher;
console.log(nomeDaMulher, endereco); // Lagartha {sobrenome: 'Lothbrock', idade: 24, endereco: { rua: 'Valhalla02', numero: 1603 } }