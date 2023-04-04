const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
  ]
  
  // retorne as pessoas que têm 5 letras ou mais
  const cincoLetras = pessoas.filter(obj => obj.nome.length > 5);
  console.log(cincoLetras);
  /*
  [ { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 } ]
   */
  
  // retorne as pessoas com mais de 50 anos
  const cinquentaPlus = pessoas.filter(obj => obj.idade > 50);
  console.log(cinquentaPlus);
  /*
  [ { nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 } ]
   */
  
  // retorne as pessoas cujo nome termina com a letra 'a'
  const terminaComA = pessoas.filter(obj => obj.nome.slice(-1) == 'a');
  console.log(terminaComA);
  /*
  [ { nome: 'Maria', idade: 23 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 } ]
   */