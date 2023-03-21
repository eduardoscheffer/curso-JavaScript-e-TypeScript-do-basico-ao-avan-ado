const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
];
const section = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    let { tag: elementoTag, texto: text } = elementos[i]
    section.innerHTML += `<${elementoTag}>${text}</${elementoTag}>`;
    // console.log(elementoTag, text); // (com i =0): p Qualquer texto que você quiser
}