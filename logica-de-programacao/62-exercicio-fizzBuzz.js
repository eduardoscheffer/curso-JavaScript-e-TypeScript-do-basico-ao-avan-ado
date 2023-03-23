function fizzBuzz (numero) {
	return (typeof numero !== 'number') ? numero
	: (numero % 3 === 0 && numero % 5 === 0) ? 'FizBuzz'
	: (numero % 3 === 0) ? 'Fizz'
	: (numero % 5 === 0) ? 'Buzz'
	: numero; 
}

for (let i = 0; i <= 100; i++) {
	console.log(i, fizzBuzz(i));
}