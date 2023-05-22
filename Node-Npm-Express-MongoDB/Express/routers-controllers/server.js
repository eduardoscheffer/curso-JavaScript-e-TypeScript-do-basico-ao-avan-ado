const express = require('express'); // importa o express
const app = express(); // cria uma instancia do express na variavel app
const routes = require('./routes');

app.use(express.urlencoded( {extended: true} )); // diz pro express pra tratar os dados do req.body
app.use(routes);


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});


