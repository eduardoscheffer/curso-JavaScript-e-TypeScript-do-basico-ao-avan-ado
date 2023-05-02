import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  geraNovoCpf() {

    const cpfSemDigito = this.rand(); // 362350979
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito); // 5
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1); // 6
    const novoCPF = cpfSemDigito + digito1 + digito2; // 36235097956

    // return novoCPF;
    this.novoCpfFormatado(novoCPF);
  }

  novoCpfFormatado(novoCPF) {
    return (
      novoCPF.slice(0, 3) + '.' +
      novoCPF.slice(3, 6) + '.' +
      novoCPF.slice(6, 9) + '-' +
      novoCPF.slice(9, 11)
    )
    
  }
  

}



// const p1 = new GeraCPF();
// console.log(p1.rand()); // 915181613