const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) { // body enviado aqui será o req.body do form
    /*
    req.body = {
      email: "fulanodasilva91@gmail.com",
      password: "123456789"
    }
    */
    this.body = body;
    /*
    this.body = {
      email: req.body.email,
      password: req.body.password
    };
    */
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email }); // retorna da database com uma collection(objeto) contendo o usuario que quer logar

    if(!this.user) { // se não achar o usuario na database
      this.errors.push('Usuário não existe.');
      return;
    }

    // faz o processo inverso do hash do cadastro, comparando a a password do req.body.password com a do this.user.password
    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida');
      this.user = null;
      return;
    }
  }

  async register() { // método da classe Login que registra uma nova collection no mongodb
    this.valida(); // chama o método valida
    if(this.errors.length > 0) return; // se tiver algo na array errors return

    await this.userExists(); // checa na base de dados se já existe um usuario com o mesmo email cadastrado - se tiver: joga um erro pra array errors

    if(this.errors.length > 0) return; // se tiver algo na array errors return

    const salt = bcryptjs.genSaltSync(); // faz o hash do password
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    this.user = await LoginModel.create(this.body); // cria E salva na db a collection, e salva localmente na key user
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email }); // faz um findOne na db. Se retornar algo salva na key user
    if(this.user) this.errors.push('Usuário já existe.'); // se o metodo findOne retornar algo, joga um erro na array errors
  }

  valida() {
    this.cleanUp(); // chama o metodo cleanUp

    // Validação
    // O e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); // usa o package validator pra ver se o email enviado é valido

    // A senha precisa ter entre 3 e 50
    if(this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() { // primeiro método que é executado ao dar o register
    for(const key in this.body) { // faz a iteração sob as keys do req.body
      if(typeof this.body[key] !== 'string') { // garante que as chaves da req.body são do tipo string amtes de irem pra validação e posteriormente pra database
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
