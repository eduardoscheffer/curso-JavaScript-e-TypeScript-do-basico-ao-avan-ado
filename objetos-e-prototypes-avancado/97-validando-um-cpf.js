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
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf);
// cpf.valida();