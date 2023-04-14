// polimorfismo é fazer um método de um 'filho' de uma classe 'pai' se comportar diferente, ou de maneira mais específica.

// superclass
class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
}

// metodo que loga o saldo da conta no console
Object.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
}

// metodo que saca o dinheiro da conta
Object.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo infuficiante: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

// metodo que deposita dinheiro na conta
Object.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

const conta1 = new Conta('3070', '1051997', 483.58);
// console.log(conta1); // Conta { agencia: '3070', conta: '1051997', saldo: 483.58 }
// conta1.sacar(100); // Ag/c: 3070/1051997 | Saldo: R$383.58

// cria a conta corrente como sendo 'herdeira' de Conta
class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo);

        this.limite = limite;
    }
}

// 'atualiza' o método sacar pra ter as funcoes especificas de uma conta corrente que vem da superclass Conta:
ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + limite)) {
        console.log(`Saldo infuficiante: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const contaCC = new ContaCorrente('3070', '147036', 100, 500)
// agora sacar na conta corrente tem um limite (cheque-especial) de R$ 500,00;

// console.log(contaCC); 
/*
ContaCorrente {
  agencia: '3070',
  conta: '147036',
  saldo: 100,
  limite: 500
}
*/