require('dotenv').config(); // importa o uso do dotenv pra aplicação

const express = require('express'); // importa o express
const app = express(); // cria uma instancia do express na variavel app

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING) // retorna uma promise
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('pronto'); // emite um sinal pro app quando a db estiver conectada
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes'); // importa as rotas
const path = require('path'); // importa o uso do path
const { middleWareGlobal } = require('./src/middlewares/middleware'); // importa o(s) middleware(s) globais

app.use(express.urlencoded( {extended: true} )); // diz pro express pra tratar os dados do req.body
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // configura o express pra usar conteudo estatico

// opções da sessions
const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
  }); 

app.use(sessionOptions); // diz pra aplicação usar sessions
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views')); // configura o express pra usar os views
app.set('view engine', 'ejs'); // seta a engine do 'html' pra ser a ejs
app.use(middleWareGlobal); // configura o express pra usar o middleware global em todas as rotas em todos os metodos
app.use(routes); // configura o express pra usar as rotas


app.on('pronto', () => { // quando o app receber a mensagem 'pronto', parte pra ouvir a conexão
    app.listen(3000, () => { // após a conexão com a db tiver sido realizada, começa a ouvir a porta
        console.log(`Servidor rodando na porta 3000: http://localhost:3000/`);
    });
})



