const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// metodo get que entrega um formulario quando o cliente acessa a rota '/'

// Rotas da home
route.get('/', homeController.paginaInicial); 
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaInicial);