// importando no node (no EC6 se usaria import) //
const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(falaNome());
/*
{
  nome: 'Eduardo',
  sobrenome: 'Scheffer',
  falaNome: [Function: falaNome]
}
*/

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Dudu', 'Scheffer', 25);

// console.log(p1.nome); dudu
// p1.sayMyName(); Meu nome é Dudu Scheffer