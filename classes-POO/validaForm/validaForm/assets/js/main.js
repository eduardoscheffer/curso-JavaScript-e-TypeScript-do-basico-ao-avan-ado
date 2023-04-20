class ValidaForm {
  constructor() {
      this.formulario = document.querySelector('.formulario');
      this.events();
  }

  events() {
      this.formulario.addEventListener('submit', e => {
          this.handleSubmit(e);
      });
  }

  handleSubmit(e) {
      e.preventDefault();
      const validFields = this.validateFields();
      const validPassword = this.validatePasswords();

      if(validFields && validPassword) {
        alert('Formulário enviado!');
        this.formulario.submit();
      }
  }

  validateFields() {
      let valid = true;

      for (let error of this.formulario.querySelectorAll('.error-text')) {
          error.remove();
      }

      for(let field of this.formulario.querySelectorAll('.validar')) {
          if(!field.value) {
              this.createError(field, `Campo não pode ficar em branco.`)
          }

          if(field.classList.contains('cpf')) {
            if(!this.validaCpf(field)) valid = false;
          }

          if(field.classList.contains('usuario')) {
            if(!this.validaUser(field)) valid = false;
          }
      }

      return valid;
  }

  validaCpf(field) {
    const cpf = new ValidaCPF(field.value);

    if(!cpf.valida()) {
      this.createError(field, `CPF Inválido`);
      return false;
    }
    return true;
  }

  validaUser(field) {
    let valid = true;
    const usuario = field.value;

    if(usuario.length < 3 || usuario.length > 12) {
      this.createError(field, `Usuario deve ter entre 3 e 12 caracteres`);
      valid = false;
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, `Usuário deve conter letras e/ou números`);
      valid = false;
    }

    return valid;
  }

  validatePasswords() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repeatSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repeatSenha.value) {
      this.createError(senha, 'Senha e repetir senha devem ser iguais');
      this.createError(repeatSenha, 'Senha e repetir senha devem ser iguais');
      valid = false;
    }
    if(senha.value.length < 6 || repeatSenha.value.length > 12) {
      this.createError(senha, `Senha deve ter entre 6 e 12 caracteres`);
      valid = false;
    }

    return valid;
  }

  createError(field, msg) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-text');

      field.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaForm();