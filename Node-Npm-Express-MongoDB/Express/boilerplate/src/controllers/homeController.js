exports.paginaInicial = (req, res) => {

    res.render('index'); // envia pra rota a pagina


};

exports.trataPost = (req, res) => {

    res.send(req.body);

}