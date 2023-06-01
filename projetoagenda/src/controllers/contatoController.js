const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {
    contato: {}
  });
};

exports.register = async(req, res) => {
  try {
    const contato = new Contato(req.body); // envia os parametros do form pra classe Contato e instancia na variavel contato
    await contato.register(); // chama o método register() do ContatoModel

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)); // salva a sessão e redireciona o usuario pra página /contato/index/:id
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const contato = await Contato.buscaPorId(req.params.id); // chama o metodo buscaPorId do ContatoModel e salva na variavel contato
  if(!contato) return res.render('404');

  res.render('contato', { contato }); // renderiza a pagina contato.ejs e manda a variavel contato pra engine do ejs usar
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const contato = await Contato.delete(req.params.id);
  if(!contato) return res.render('404');

  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect('back'));
  return;
};
