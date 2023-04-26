document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

const carregaPagina = async (el) => {
    try {
        
        const URL = el.getAttribute('href'); // pagina1.html
        const response = await fetch(URL);

        if(response.status !== 200) throw new Error('Erro inesperado.');

        const data = await response.text();
        carregaResultado(data);

    } catch (error) {

        console.warn(error);

    }
}

const carregaResultado = (data) => {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = data;
}