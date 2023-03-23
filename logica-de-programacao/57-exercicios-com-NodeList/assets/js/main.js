const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // NodeList(4) [p, p, p, p]

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody); // rgb(17, 86, 102)


const changeBackground = (cor) => {
    for (let p of ps) { // iterar sobre o NodeList ps
        p.style.backgroundColor = cor;
        p.style.color = '#ffffff';
    }
}

document.addEventListener('load', changeBackground(backgroundColorBody));