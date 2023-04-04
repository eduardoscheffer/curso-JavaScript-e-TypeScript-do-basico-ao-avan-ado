function randomArr (elements, min = 0, max = 100) {
    let newArr = [];
    for (let i = 0; i < elements; i++) {
      newArr.push(Math.floor(Math.random() * max - min + 1) + min);
    }
    return newArr;
  }

const numeros = randomArr(10, 0, 10); // array aleatoria de 10 elementos entre 1 e 10;

const total = numeros.reduce( (counter, el) => counter + el, 0);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
  ]

// Retorna a pessoa mais velha:
const maisVelha = pessoas.reduce( (acum, el) => {
   if (acum.idade > el.idade) return acum;
   return el
})

console.log(maisVelha); // { nome: 'Luiz', idade: 62 }