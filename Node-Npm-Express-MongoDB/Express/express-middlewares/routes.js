const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// funcao middleWare:
function meuMiddleWare (req, res, next) {
    console.log();
    console.log('Passei pelo middleware');
    console.log();
    next(); // aqui o middleware delega a proxima funcao a ser executada
}

// metodo get que entrega um formulario quando o cliente acessa a rota '/'

// Rotas da home
route.get('/', homeController.paginaInicial); 
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;

// console.log(contatoController)