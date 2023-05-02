import GeraCPF from "./modules/GeraCPF";

import './assets/css/style.css'

(function() {

  const resultado = document.querySelector('.cpf-gerado');
  const cpfGerado = new GeraCPF();

  resultado.innerHTML = cpfGerado.geraNovoCpf()

})()

