function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(() => console.log(mostraHora()), 1000); // vai logar no console a dat atual de 1 em 1 segundo;

setTimeout(() => {
    clearInterval(timer); // pausa o setInterval
}, 10000); // funcao que vai fazer o timer ser executado por 10s