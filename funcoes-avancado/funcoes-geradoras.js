function* geradora1() {
    // codigo qualquer ...
    yield 'Valor 1' // retorna esse valor quando a função for chamada pela primeira vez
    yield 'Valor 2' // retorna esse valor qyabdi a função for chamada pela segunda vez
    yield 'Valor 3' // retorna esse valor qyabdi a função for chamada pela terceira vez
}

const g1 = geradora1();
console.log(g1.next()); // { value> 'Valor 1', done: false }
console.log(g1.next().value); // Valor 1
// chamando a função pela segunda vez:
console.log(g1.next().value); // Valor 2
// chamando a função pela terceira vez:
console.log(g1.next().value); // Valor 3
 
////////////////////////////////////////////////////
function* geradora3() {
    yield 0
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor); // 0 1 2 3 4 5
}