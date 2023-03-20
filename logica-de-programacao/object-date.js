function putZeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia = putZeroAEsquerda(data.getDate());
    const mes = putZeroAEsquerda(data.getMonth());
    const ano = putZeroAEsquerda(data.getFullYear());
    const hora = putZeroAEsquerda(data.getHours());
    const min = putZeroAEsquerda(data.getMinutes());
    const seg = putZeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


const data = new Date();
const dataBrasil = formataData(data);