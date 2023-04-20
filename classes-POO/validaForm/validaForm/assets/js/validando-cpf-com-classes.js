// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, ''); // troca qualquer coisa que não é um número por nada;
// cpfLimpo = Array.from(cpfLimpo);
// cpfLimpo = [...cpfLimpo];
// console.log(cpfLimpo);
/*
[
  '7', '0', '5', '4',
  '8', '4', '4', '5',
  '0', '5', '2'
]
*/

// console.log(cpfLimpo.reduce((acum, val) => acum + Number(val), 0)); // 44

// -----------Classe CPF com o metodo valida pra validar um cpf--------//
class ValidaCPF {
    constructor(cpfEnviado) { // envia um cpf ex: "070.987.720-03"
        Object.defineProperty(this, 'cpfLimpo', { // propriedade cpfLimpo
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // retira tudo que não for numero do cpf enviado
        });
    }

    // -----------Metodo que retorna o cpf repetido pelo seu primeiro digito---------//
    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    // ------Metodo que chama o metodo que gera o 10 e 11 digito do cpf e cria a nova propriedade novoCPF------//
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    // -----Metodo que gera o 10 e 11 digito do cpf----//
    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0': String(digito);
    }

    // ----Metodo que faz todas as checagens e retorna true se o novoCPF gerado for igual ao passado-----//
    valida() {
        if(!this.cpfLimpo) return false; // se o cpf nao for informado
        if(typeof this.cpfLimpo !== 'string') return false; // se o tipo do cpf não for do tipo string
        if(this.cpfLimpo.length !== 11) return false; // se o cpf passado não tiver 11 numeros
        if(this.isSequence()) return false; // se o cpf passado for uma sequencia de mesmo numero

        // ---Se passar por todas as checagens, gera a nova propriedade novoCPF----//
        this.geraNovoCpf();

        // checa se o novoCPF gerado é igual ao informado
        return this.novoCPF === this.cpfLimpo;

    }

}

const validacpf = new ValidaCPF('070.987.720-03')
// console.log(validacpf); // ValidaCPF { cpfLimpo: '07098772003' }
console.log(validacpf.valida());


