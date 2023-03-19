// Parar o envio do formulário:
const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

function validateAltura () {
    let alturaREGEX = /\d{1}.\d{2}/gm;
    let alturaResult = alturaREGEX.test(altura.value);
    if (alturaResult === false) {
        alert('Altura inválida. Coloque no formato x.xx');
    }
}


function recebeEventoForm (e) {
    e.preventDefault(); // para o envio do formulario
    const IMC = (peso.value / (altura.value * altura.value)).toFixed(2);
    let faixaIMC;
    if (IMC < 18.5) {
        faixaIMC = 'Abaixo do peso normal';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        faixaIMC = 'Peso normal';
    } else if (IMC >= 25 && IMC <= 19.9) {
        faixaIMC = 'Excesso de peso';
    } else if (IMC >= 30 && IMC <= 34.9) {
        faixaIMC = 'Obesidade classe 1';
    } else if (IMC >= 35 && IMC <= 39.9) {
        faixaIMC = 'Obesidade classe II';
    } else if (IMC >= 40) {
        faixaIMC = 'Obesidade classe III';
    } else {
        faixaIMC = 'Inexistente';
    }
    console.log(`O IMC é ${IMC} Kg/m² (${faixaIMC}).`);
}

form.addEventListener('submit', validateAltura);
form.addEventListener('submit', recebeEventoForm);