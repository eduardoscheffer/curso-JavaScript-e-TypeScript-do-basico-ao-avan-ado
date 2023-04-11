function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // colocando um método diretamente no objeto:
    // this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}`;
}

// colocando o método nomeCompleto no prototype doobjeto (__proto__):
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa('Luiz, O.');

// MANIPULANDO PROTOTYPES:
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

// chamando uma propriedade de objA pra dentro de objB:
Object.setPrototypeOf(objB, objA);
console.log(objB.objA); // A

// continuando a cadeia:
const objC = new Object(); // modo diferente de declarar um objeto;
objC.chaveC = 'C';
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA, objC.chaveB); // A B

///////////////////////

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// metodo que aplica desconto ao nosso Produto:
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual /100))
};

const p1 = new Produto('Camiseta', 50);

// literal:
const p2 = {
    nome: 'Caneca',
    preco: 15
};
// setando os metodos de Produto pra p2 agora, porque ela foi criada de maneira literal, diferentemente de p1:
Object.setPrototypeOf(p2, Produto.prototype);

console.log(p1 instanceof Produto); // true

console.log(p2 instanceof Produto); // true

const p3 = Object.create(Produto.prototype);