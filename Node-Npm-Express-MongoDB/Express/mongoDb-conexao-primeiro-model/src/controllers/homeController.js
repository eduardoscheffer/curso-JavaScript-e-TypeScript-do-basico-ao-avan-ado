const HomeModel = require('../models/HomeModel'); // importa o model HomeModel


// HomeModel.create({ // cria o documento que vai ser criado na db. Retorna uma promise
//     titulo: 'Primeiro título de teste do MongoDB',
//     descricao: 'Este foi o primeiro dado inserido no MongoDB utilizando NodeJs e Mongoose'
// })
//     .then(dados => console.log(dados)) 
//     /*
//     {
//     titulo: 'Primeiro título de teste do MongoDB',
//     descricao: 'Este foi o primeiro dado inserido no MongoDB utilizando NodeJs e Mongoose',
//     _id: new ObjectId("646fd41de1cc660a2ec73149"),
//     __v: 0
//     }
//     */
//     .catch(e => console.log(e));

HomeModel.find() // lista todos os dados/collections da mongodb
    .then(dados => console.log(dados))
    /*
    [
    {
        _id: new ObjectId("646fd41de1cc660a2ec73149"),
        titulo: 'Primeiro título de teste do MongoDB',
        descricao: 'Este foi o primeiro dado inserido no MongoDB utilizando NodeJs e Mongoose',
        __v: 0
    },
    {
        _id: new ObjectId("646fd63ced70fb025beb1ab7"),
        titulo: 'Primeiro título de teste do MongoDB',
        descricao: 'Este foi o primeiro dado inserido no MongoDB utilizando NodeJs e Mongoose',
        __v: 0
    }
    ]
    */
    .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {

    res.render('index'); // envia pra rota a pagina


};

exports.trataPost = (req, res) => {

    res.send(req.body); // envia o objeto req.body pegado do form

}