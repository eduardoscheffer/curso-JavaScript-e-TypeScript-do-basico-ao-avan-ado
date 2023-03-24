function relogio() {
    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    } // função que retorna uma hora baseada em segundos. Ex: 10s === 10000 ms, a função retorna formatado como 00:00:10
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos ++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000) // função que inicia o relogio, o setInterval executa a cada 1000ms = 1s
    }
    
    document.addEventListener('click', (e) => {
        const el = e.target; // é o elemento que eu clicar no DOM
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('.pausado');
            clearInterval(timer);
            iniciaRelogio();
        };
        if (el.classList.contains('pausar')) {
            relogio.classList.add('.pausado');
            clearInterval(timer); // pausa o setInterval
        };
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('.pausado');
            clearInterval(timer); // pausa o setInterval
            relogio.innerHTML = '00:00:00'; // zera o innerHtml
            segundos = 0;
        }
    })
}

relogio();
