const express = require('express'); // importa o express
const app = express(); // cria uma instancia do express na variavel app

app.use(express.urlencoded( {extended: true} )); // diz pro express pra tratar os dados do req.body

/*
req.params => vem das partes que vem na rota da url, onde o parametro da url é a chave do objeto req.params
req.query => vem na query string, onde as chaves da query são as chaves do objeto req.query
req.body => vem de requisições POST, onde o name do form é a chave do objeto req.body
*/

app.get('/reqParams/:id?', (req, res) => { // :id syntaxe pra pegar a id, e '?' para ser opcional
    
    //http://localhost:3000/reqParams/12
    const parametro = req.params.id; // pega o parâmetro da url
    
    res.send(req.params); // recebe um JSON na página: {"id":"12"}
    
    // res.send(parametro); // 12
    
});

app.get('/reqQuery/:id?', (req, res) => { // :id syntaxe pra pegar a id, e '?' para ser opcional
    
    //http://localhost:3000/reqQuery/12?nome=Eduardo&sobrenome=Scheffer

    res.send(req.query); // recebe um JSON na página: {"nome":"Eduardo","sobrenome":"Scheffer"}
    
});


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});


app.post('/caminhoEnviado', (req, res) => {
    // console.log(req.body); // { nome: 'Dudu' }
    res.send(`Formulário recebido de ${req.body.nome}`); // nome porque no html o atributo name="nome"
})


app.get('/', (req, res) => { // metodo get que entrega um formulario quando o cliente acessa a rota '/'
    res.send(`
    <form action ="/caminhoEnviado" method="POST">
    Usuário: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `); // envia pra rota o formulário
});
