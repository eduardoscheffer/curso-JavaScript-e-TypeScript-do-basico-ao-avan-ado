exports.paginaInicial = (req, res) => {

    res.send(`
    <form action ="/caminhoEnviado" method="POST">
    Usuário: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `); // envia pra rota o formulário

};

exports.trataPost = (req, res) => {

    res.send('Oi, sou a nova rota de POST');

}