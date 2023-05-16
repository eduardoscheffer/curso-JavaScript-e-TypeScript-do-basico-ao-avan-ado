const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = [
    { nome: 'Eduardo' },
    { nome: 'Joao' },
    { nome: 'Maria' },
    { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, '', 2); // formata o objeto para json com 2 identações
// console.log(json)
/*
[
  {
    "nome": "Eduardo"
  },
  {
    "nome": "Joao"
  },
  {
    "nome": "Maria"
  },
  {
    "nome": "Luiza"
  }
]
*/

fs.writeFile(caminhoArquivo, json, { flag: 'w' });