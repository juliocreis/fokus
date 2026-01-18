const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', () => {
    alteraContexto('foco');
});

descansoCurtoBt.addEventListener('click', () => {
    alteraContexto('descanso-curto');
});

descansoLongoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
});

function alteraContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
}