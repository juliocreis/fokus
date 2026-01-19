const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');

focoBt.addEventListener('click', () => {
    alteraContexto('foco');
    alteraTituloContexto('Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>');
    focoBt.classList.add('active');
});

descansoCurtoBt.addEventListener('click', () => {
    alteraContexto('descanso-curto');
    alteraTituloContexto('Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>');
    descansoCurtoBt.classList.add('active');
});

descansoLongoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
    alteraTituloContexto('Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>');
    descansoLongoBt.classList.add('active');
});

function alteraContexto(contexto) {
    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
}

function alteraTituloContexto(texto) {
    titulo.innerHTML = texto;
}
