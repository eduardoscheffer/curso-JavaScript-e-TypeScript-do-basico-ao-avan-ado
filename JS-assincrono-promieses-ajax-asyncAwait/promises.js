function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // cria a promise usando o construtor
        if (typeof msg !== 'string') reject('Bad Value'); // checa se o tipo da msg passada é uma string e rejeita na funcao reject;    

        setTimeout(() => {
            resolve(msg); // resolve a promisse quando obtiver sucesso
        }, tempo);
    });
}


// vai executar primeiro Frase 1, depois Frase 2 e por fim Frase 3, independente do tempo que demore cada para executar;
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => { // then -> usa o que ficou resolvido lá na funcao resolve;
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3)); // encadeia pra proxima promise
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => { // pega o que ficou rejeitado la na funcao reject;
        console.log(e);
    });

const promises = [
    esperaAi('Frase 1 ', rand(1, 3)),
    esperaAi('Frase 2 ', rand(1, 3)),
    esperaAi('Frase 3 ', rand(1, 3))
]

Promise.all(promises) // Executa a array promises assim que TODO as funcoes forem concluidas
    .then(resposta => {
        console.log(resposta);
    }) // [ 'Frase 1 ', 'Frase 2 ', 'Frase 3 ' ]

Promise.race(promises) // executa a primeira função da array que retornar com suceso
    .then(resposta => {
        console.log(resposta);
    })