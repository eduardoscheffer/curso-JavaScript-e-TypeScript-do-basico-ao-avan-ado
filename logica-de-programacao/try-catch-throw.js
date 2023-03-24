try {
    console.log(naoExisto); // tenta executar o codigo
} catch(err) { // se nao executar cai no bloco catch
    console.log('naoExisto nao existe'); // naoExisto nao existe
}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros')
    }

    return x + y;
}

try {
    console.log(soma(1, 2)); // 3
    console.log(soma('1', 2)); // x e y preciam ser numeros
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigavel pro usuario.'); 
}
// ###################################################### //
function retornaData(data) {
    if ( data && !(data instanceof Date) ) {
        throw TypeError('Esperando instancia de Date')
    }

    if (!data) { // se data não foi enviada
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};


try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaData(11);
    console.log(hora);
} catch(e) {
    console.log('Deu erro');
    console.log(e);
} finally {
    console.log('Sempre sou executado');
}
/*
Deu erro
VM107:22 TypeError: Esperando instancia de Date
    at retornaData (<anonymous>:3:15)
    at <anonymous>:18:18
VM107:24 Sempre sou executado
*/
