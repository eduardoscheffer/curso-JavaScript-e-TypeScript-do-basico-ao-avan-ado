const velocidade = Symbol(); // cria uma variavel 'escondida' onde não é possivel alterala no código

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade] = 0; // notação da variavel Symbol        
    }

    acelerar() {
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }

    freiar() {
        if(this[velocidade] <= 0) return;
        this[velocidade]--;
    }

    get velocidade() {
        console.log(`Velocidade atual: ${this[velocidade]}`);
    }

    set velocidade(val) {
        this[velocidade] = val;
    }

}

const carro1 = new Carro('Fusca');
// console.log(carro1); // Carro { nome: 'Fusca', [Symbol()]: 0 }
// console.log(carro1.velocidade); // undefined
// console.log(carro1[velocidade]); // 0
// carro1.velocidade; // Velocidade atual: 0
// carro1.acelerar();
// carro1.velocidade; // Velocidade atual: 1
// carro1.freiar();
// carro1.velocidade; // Velocidade atual: 0
// carro1.velocidade = 80;
// carro1.velocidade; // 

class Flex extends Carro {
    constructor(nome, ano, combustivel) {
        super(nome);
        this.ano = ano;
        this.combustivel = combustivel;
    }

    get _combustivel() {
        console.log(`${this.nome} é movido a ${this.combustivel}`);
    }
}

const fiesta = new Flex('Mob', 2013, 'Gasolina');

console.log(fiesta[velocidade]); // 0
fiesta.velocidade // Velocidade atual: 0
fiesta._combustivel; // Mob é movido a Gasolina