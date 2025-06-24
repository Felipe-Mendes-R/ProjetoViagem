const hamburguer = document.querySelector('#hamburguer');
const navegacao = document.querySelector('#navegacao');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    navegacao.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
navegacao.addEventListener('click', (event) => {
    toggleMenu();
});