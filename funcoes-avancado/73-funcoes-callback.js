// cria uma função que retorna um numero aleatorio entre 1000 e 3000
const rand = (min = 1000, max = 3000) => Math.floor(Math.random() * (max - min) + min);

function f1 (callbackFunction) {
    setTimeout(() => {
        console.log('f1');
        if (callbackFunction) callbackFunction()
    }, rand());
}

function f2 (callbackFunction) {
    setTimeout(() => {
        console.log('f2');
        if (callbackFunction) callbackFunction()
    }, rand());
}

function f3 (callbackFunction) {
    setTimeout(() => {
        console.log('f3');
        if (callbackFunction) callbackFunction()
    }, rand());
}

f1(function () {
    f2(function() {
        f3(function () {
            console.log('Chegamos ao fim agora.')
        })
    })
})

// f1, f2 e f3 têm tempo de execução diferentes. Pra garantir a execução na ordem (primeiro f1, então f2, e só então executar f3, pode-se fazer uso de callback functions como argumento de cada função):

// A execução do código independente do timer passado no parâmetro rand() do timeOut:
/*
f1
f2
f3
Chegamos ao fim agora.
*/