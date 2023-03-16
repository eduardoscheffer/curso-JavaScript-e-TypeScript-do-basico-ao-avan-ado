function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []; 

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            'nome': nome.value, 
            'sobrenome': sobrenome.value, 
            'peso': peso.value, 
            'altura': altura.value
        });
        
        console.log(pessoas);
        // console.log(pessoas[0].nome) // Eduardo
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>O nome é: ${nome.value}</p<br />`;
        resultado.innerHTML += `<p>O sobrenome é: ${sobrenome.value}</p<br />`;
        resultado.innerHTML += `<p>O peso é: ${peso.value} Kg</p<br />`;
        resultado.innerHTML += `<p>A altura é: ${altura.value}m</p<br />`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()