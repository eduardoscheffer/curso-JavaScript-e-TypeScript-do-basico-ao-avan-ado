const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const ler = require('./modules/ler'); // === const ler = fs.readFile(caminho, 'utf8);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

const renderizaDados = (dados) => {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}
leArquivo(caminhoArquivo);
/**
{ nome: 'Eduardo' }
{ nome: 'Joao' }
{ nome: 'Maria' }
{ nome: 'Luiza' }
*/