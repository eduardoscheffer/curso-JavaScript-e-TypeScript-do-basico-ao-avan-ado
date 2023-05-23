const express = require('express'); // importa o express
const app = express(); // cria uma instancia do express na variavel app
const routes = require('./routes'); // importa as rotas
const path = require('path'); // importa o uso do path

app.use(express.urlencoded( {extended: true} )); // diz pro express pra tratar os dados do req.body

app.set('views', path.resolve(__dirname, 'src', 'views')); // configura o express pra usar os views
app.set('view engine', 'ejs'); // seta a engine do 'html' pra ser a ejs
app.use(routes); // configura o express pra usar as rotas


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});


