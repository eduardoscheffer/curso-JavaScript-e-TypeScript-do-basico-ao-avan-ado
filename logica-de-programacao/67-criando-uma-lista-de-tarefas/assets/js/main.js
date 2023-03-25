const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function createLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) { // código pra tecla enter
        if (!inputTarefa.value) return;
        createTask(inputTarefa.value);
    }
})

function clearInput() {
    inputTarefa.value = ''; // limpa o input
    inputTarefa.focus(); // foca o cursor automaticamente de volta pro input
}

function createEraseButton (li) {
    li.innerText += ' '; // coloca um espaço entre o li e o novo botão;
    const eraseButton = document.createElement('button'); // cria botão
    eraseButton.innerText = 'Apagar'; // botao vai ser o texto Apagar
    eraseButton.setAttribute('class', 'apagar');
    eraseButton.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(eraseButton);
}

function createTask(textoInput) {
    const li = createLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    clearInput();
    createEraseButton(li);
    saveTasks();
}

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) {
        return;
    };
    createTask(inputTarefa.value);
})

document.addEventListener('click', (e) => {
    const el = e.target;
    // se o evento for clicar no elemento que tenha a classe 'apagar':
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // remove o pai do elemento clicado
        saveTasks() // limpa o local storage quando clicar no botão apagar
    }
})

function saveTasks() {
    // pega todas as tarefas que estão dentro da classe .tarefas
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []; // cria uma array que vai receber as tarefas;

    // itera sobre a nodeList de liTarefas
    for (let tarefa of liTarefas) {
        // adiciona a tarefa na array, removendo o texto 'Apagar' e qualquer espaço em branco tambem com .trim()
        listaDeTarefas.push(tarefa.innerText.replace('Apagar', '').trim());
    }

    // Salva as tarefas num JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // salva no navegador o tarefasJSON com o nome de 'tarefas' pra recuperar depois
    localStorage.setItem('tarefas', tarefasJSON);
}

// funcao que lê as tarefas salvas na local Storage e jogar de volta na <ul>:
function addSavedTasks () {
    // localStorage é global, por isso conseguimos pegar em qualquer local
    const tarefas = localStorage.getItem('tarefas');
    // converte de volta as tarefas pra array:
    const listaDeTarefas = JSON.parse(tarefas);
    // adiciona de volta cada elemento da listaDeTarefas chamando a função createTask e passando cada elemento como argumento:
    for (let tarefa of listaDeTarefas) {
        createTask(tarefa);
    }
}
addSavedTasks();