const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// splice(indice, quantos elementos deletar, elemto pra add, elemento pra add... etc)
const removidos = nomes.splice(4, 1);
console.log(nomes); // ['Maria', 'João', 'Eduardo', 'Gabriel']
console.log(removidos); // ['Júlia]

const newArr = nomes.splice(3, 2, 'Luiz', 'Otavio');
console.log(newArr); // ['Maria', 'João', 'Eduardo', 'Luiz', 'Otavio]

