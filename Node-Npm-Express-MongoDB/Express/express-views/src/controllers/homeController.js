exports.paginaInicial = (req, res) => {

    res.render('index'); // envia pra rota o formulário

};

exports.trataPost = (req, res) => {

    res.send('Oi, sou a nova rota de POST');

}