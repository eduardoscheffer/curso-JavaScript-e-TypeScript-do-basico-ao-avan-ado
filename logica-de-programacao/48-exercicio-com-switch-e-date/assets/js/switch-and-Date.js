// const resultado = document.querySelector('.container h1')
// const data = new Date();
// let dia = getDia(data.getDay()); // 0 - domingo; 1 - segunda ....
// let mes = getMes(data.getMonth()); // 0 - janeiro; 1 - fev...
// const diaDoMes = data.getDate(); // dia do mês (20)
// const year = data.getFullYear(); // ano
// const hora = data.getHours(); // hora
// const minutos = putZeroLeft(data.getMinutes()); // minutos


// function getDia (dia) {
//     switch (dia) {
//     case 0:
//         dia = 'Domingo';
//         return dia;
//     case 1:
//         dia = 'Segunda-Feira';
//         return dia;
//     case 2:
//         dia = 'Terça-feira';
//         return dia;
//     case 3:
//         dia = 'Quarta-Feira';
//         return dia;
//     case 4:
//         dia = 'Quinta-Feira';
//         return dia;
//     case 5:
//         dia = 'Sexta-Feira';
//         return dia;
//     case 6:
//         dia = 'Sábado';
//         return dia;
//     }
// }

// function getMes (mes) {
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//     return meses[mes];
// }

// function putZeroLeft (num) {
//     return num >= 10 ? num: `0${num}`;
// }

// const setData = () => resultado.innerHTML = `${dia}, ${diaDoMes} de ${mes} de ${year} <br /> ${hora}:${minutos}`;

// setData()

// FAZENDO O MESMO CÓDIGO MAS USANDO A FUNÇÃO toLocaleString():
const resultado = document.querySelector('.container h1')
const data = new Date();

console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full' }))
console.log(data.toLocaleTimeString('pt-BR', { timStyle: 'short' }));

resultado.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: 'full' })} <br /> ${data.toLocaleTimeString('pt-BR', { timStyle: 'short' })}`