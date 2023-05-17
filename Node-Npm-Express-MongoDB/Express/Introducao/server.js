const express = require('express'); // importa o express
const app = express(); // cria uma instancia do express na variavel app


//          POST   GET    PUT    DELETE
// CRUD -> CREATE. READ, UPDATE, DELETE

// http://meusite.com/ -> GET == entregue a página

app.get('/', (req, res) => { // metodo get que entrega um formulario quando o cliente acessa a rota '/'
    res.send(`
    <form action ="/" method="POST">
    Usuário: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `); // envia pra rota o formulário
});

app.post('/', (req, res) => {
    res.send('Formulário recebido.')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});