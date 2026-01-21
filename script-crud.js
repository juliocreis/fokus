const adicionarTaskBt = document.querySelector('.app__button--add-task');
const formAdicionaTask = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');

const tarefas = [];

adicionarTaskBt.addEventListener('click', () => {
    formAdicionaTask.classList.toggle('hidden');
});

formAdicionaTask.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});
