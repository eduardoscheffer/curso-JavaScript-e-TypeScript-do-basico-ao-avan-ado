const nome = 'Eduardo';
const sobrenome = 'Scheffer';

const falaNome = () => nome + ' ' + sobrenome;

// exportando no node //
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


// console.log(exports);
/*
{
  nome: 'Eduardo',
  sobrenome: 'Scheffer',
  falaNome: [Function: falaNome]
}
*/

// class Pessoa com nome, sobrenome, idade e sayMyName():
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    sayMyName() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
}

exports.Pessoa = Pessoa;