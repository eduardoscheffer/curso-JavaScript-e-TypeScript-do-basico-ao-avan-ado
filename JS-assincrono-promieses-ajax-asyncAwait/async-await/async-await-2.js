// sintaxe
function primeiraFuncao() {
    return new Promise(resolve => {

        setTimeout(() => {
            console.log('Revolveu isso aqui.');
            resolve();
        }, 1000)

    })
}

async function segundaFuncao() {
    console.log('Iniciou');

    await primeiraFuncao();

    console.log('Terminou');
}

segundaFuncao(); 
/*
Iniciou
Esperou isso aqui.
Terminou
*/

// Prático:
// requisicao fetch (assincrona), nao se sabe quanto tempo vai levar:
function getUser(id) {
    return fetch(`http://reqres.in/api/user?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err));
}

async function showUserName(id) {
    try {
        const user = await getUser(id); // espera a promise ser resolvida pra salvar na variavel user

        console.log(`O nome do usuario é ${user.data.first_name}`);
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}