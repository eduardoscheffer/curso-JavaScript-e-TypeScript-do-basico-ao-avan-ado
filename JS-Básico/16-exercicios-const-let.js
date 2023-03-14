const nome = 'Eduardo';
const sobrenome = 'Scheffer';
const idade = 30;
const peso = 84;
const altura = 1.80;

 // IMC = peso / (altura * altura)
let imc = peso / (altura**2)
let anoNascimento = 2023 - 30;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${84}Kg, tem altura de ${altura}m e seu IMC é ${imc.toFixed(2)}`)
console.log(`${nome} nasceu em ${anoNascimento}`)