function randomArr (elements, min = 0, max = 100) {
    let newArr = [];
    for (let i = 0; i < elements; i++) {
      newArr.push(Math.floor(Math.random() * max - min + 1) + min);
    }
    return newArr;
  }

const numeros = randomArr(10, 0, 10); // array aleatoria de 10 elementos entre 1 e 10;

const numerosDobrdos = numeros.map(el => el * 2);


// UTILIZANDO EM OBJETOS:
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
  ]

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa;
const nomesPessoas = pessoas.map(obj => obj.nome).join(' ');
// console.log(nomesPessoas); // Luiz Maria Eduardo Leticia Rosana Wallace

// Remova apenas a chave "nome" do objeto;
const idadePessoas = pessoas.map(obj => {
    return { idade: obj.idade }
  });
  console.log(idadePessoas); 
  /*
  [ { idade: 62 },
    { idade: 23 },
    { idade: 55 },
    { idade: 19 },
    { idade: 32 },
    { idade: 47 } ]
   */

// Adicione uma chave id em cada objeto;
const comIDs = pessoas.map( (obj, indice) => {
    const newObj = { ...obj }; // copia dos objetos de pessoas pra não mexer na array original
    newObj.id = indice;
    return obj;
  });
  
  console.log(comIDs);
  /*
  [ { nome: 'Luiz', idade: 62, id: 0 },
    { nome: 'Maria', idade: 23, id: 1 },
    { nome: 'Eduardo', idade: 55, id: 2 },
    { nome: 'Leticia', idade: 19, id: 3 },
    { nome: 'Rosana', idade: 32, id: 4 },
    { nome: 'Wallace', idade: 47, id: 5 } ]
   */