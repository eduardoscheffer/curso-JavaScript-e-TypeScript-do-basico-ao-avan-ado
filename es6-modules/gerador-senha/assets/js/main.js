// gera um numero inteiro aleatorio
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// gera um caracter maiusculo com base na tabela ascii
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

// gera um caracter minusculo com base na tabela ascii
const geraMinuscula = () => String.fromCharCode(rand(97, 123));

// gera um número aleatorio com base na tabela ascii:
const geraNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ',.;-^[]{}!@#$%&*=_*';
// gera um simbolo aleatorio da string simbolos
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

// funcao geraSenha
function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    if (qtd && maiusculas || minusculas || numeros || simbolos) {
        qtd = Number(qtd);
        const senhaArray = []; // array que vai receber os caracteres

        // loop pra quantidade de caracteres informados
        for (let i = 0; i < qtd; i++) {
            if (maiusculas) senhaArray.push(geraMaiuscula()); // se maiuscula for passado (true)
            if (minusculas) senhaArray.push(geraMinuscula()); // se minuscula for passado (true)
            if (numeros) senhaArray.push(geraNumero()); // se numeros for passado (true)
            if (simbolos) senhaArray.push(geraSimbolo()); // se simbolos for passado (true)
        }
        return senhaArray.join('').slice(0, qtd); // retorna uma string da array e pega somente a qtd passada na funcao
    }
    else {
        return 'Nada Selecionado'
    }

}

// console.log(geraSenha(5, true, true, true, true)); // Od9-P 

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha')

gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = geraSenha(
        qtdCaracteres.value, // quantidade que o usuario colocou
        chkMaiusculas.checked, // true/false se a opcao tiver marcada
        chkMinusculas.checked, // true/false se a opcao tiver marcada
        chkNumeros.checked, // true/false se a opcao tiver marcada
        chkSimbolos.checked // true/false se a opcao tiver marcada
        );
});

// regex pra validar a senha: https://regex101.com/r/vNXcbw/1
// /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/gm