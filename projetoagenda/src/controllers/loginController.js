const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if(req.session.user) return res.render('login-logado');
  return res.render('login');
};

exports.register = async function(req, res) {
  try {
    const login = new Login(req.body); // crio uma instancia da classe Login - que se encontra nos models do projeto - na variavel login
    await login.register(); // chamo o método register() da classe

    if(login.errors.length > 0) { // se a array errors da classe tiver algo:
      req.flash('errors', login.errors); // manda um flash como sendo um array com os errors
      req.session.save(function() { // salva a session e é redirecionado de volta pra página
        return res.redirect('back');
      });
      return;
    }

    // caso o registro ocorreu com sucesso, manda um flash pra página:
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('back'); // salva a session e volta
    });
  } catch(e) {
    console.log(e);
    return res.render('404'); // caso der algum erro no register, renderiza a página '404.ejs'
  }
};

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login(); // faz as validações no LoginModel

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    // caso todo os testes derem certo no Login.login, salva o email na key login.user:
    req.flash('success', 'Você entrou no sistema.'); // manda um flash pro ejs
    req.session.user = login.user; // salva a sessão do usuario/navegador
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function(req, res) { // controller de logout
  req.session.destroy(); // destroi a sessão do usuario
  res.redirect('/'); // redireciona o usuario pra home
};

