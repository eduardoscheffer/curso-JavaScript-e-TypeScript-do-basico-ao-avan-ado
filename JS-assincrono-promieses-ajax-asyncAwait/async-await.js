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
// esperaAi('Fase 1', rand(1, 3))
//     .then(resposta => { // then -> usa o que ficou resolvido lá na funcao resolve;
//         console.log(resposta);
//         return esperaAi('Fase 2', rand(1, 3)); // encadeia pra proxima promise
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 3', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch(e => { // pega o que ficou rejeitado la na funcao reject;
//         console.log(e);
//     });

async function executa() { // async vai permitir usar o await dentro da função
    try {
        // --------await vai permitir esperar uma promise resolver pra ser executada------- //
        const fase1 = await esperaAi('Fase 1', rand(1, 3));
        console.log(fase1);
        const fase2 = await esperaAi(2, rand(1, 3));
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand(1, 3));

        console.log(`Terminamos na fase ${fase3}`);
    } catch (error) {
        console.log(error);
    }
}
executa();