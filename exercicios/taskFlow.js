const adicionarTarefaBt = document.querySelector('.btn-add-task');
const formulario = document.querySelector('.form-add-task');
const textarea = document.querySelector('.app__form-textarea');

const tarefas = [];


adicionarTarefaBt.addEventListener('click', () => {
    adicionarTarefaBt.classList.toggle('hidden');
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});