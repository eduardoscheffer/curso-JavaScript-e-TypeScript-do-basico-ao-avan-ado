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

function ValidaCPF (cpfEnviado) {
    // cria a propriedade cpfLimpo e da as configuração de enumerable e o 'valor' como sendo o cpf sem os pontos e traços:
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() { // funcao que valida o cpf
    // se for undefined retorna false
    if (typeof this.cpfLimpo === 'undefined') return false;
    // se nao for 11 digitos retorna false
    if (this.cpfLimpo.length !== 11) return false;
    // se o cpf for uma sequencia exata de numeros:
    if (this.isSequence()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // cria a variavel com os 9 primeiros digitos do cpf
    // chama a função criaDigito e passa o cpfLimpo com os 9 primeiros digitos
    const digito1 = this.criaDigito(cpfParcial); // retorna o 10º número do cpf
    const digito2 = this.criaDigito(cpfParcial + digito1); // retorna o 11º número do cpf


    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo; // compara o cpf gerado com o passado pra, finalmente, ver se é valido
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) { // funcao que faz o calculo do 10º e 11º  digito do cpf com base nos 9 primeiros digitos do cpfEnviado
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        // console.log(regressivo);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    // reduce por baixo:
    /*
    valx  valx valx valx valx valx valx valx valx
    10      9    8    7    6    5    4    3   2
    70  0  40 28 48 20 16 15 0 = 237
    */

    // console.log(total); // 237

    // 11 - (237 % 11) = 5 (Primeiro dígito)
    const digito1 = 11 - (total % 11);
    // console.log(digito1); // 5
    return digito1 > 9 ? '0': String(digito1);

}

ValidaCPF.prototype.isSequence = function() {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida()); // true
// const cpf2 = new ValidaCPF('705.484.451-52');
// console.log(cpf2.valida); // false