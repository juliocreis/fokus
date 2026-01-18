const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alteraContexto('foco');
    alteraTitulo('Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>');
});

descansoCurtoBt.addEventListener('click', () => {
    alteraContexto('descanso-curto');
    alteraTitulo('Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>');
});

descansoLongoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
    alteraTitulo('Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>');
});

function alteraContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
}

function alteraTitulo(texto) {
    titulo.innerHTML = texto;
}