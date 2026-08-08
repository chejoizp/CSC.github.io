
const modal1 = document.getElementById('miModal');
const abrirBtn2 = document.getElementById('mas-nosotros');

// Abrir el modal de forma modal (bloquea el fondo)
abrirBtn2.addEventListener('click', () => {
modal1.showModal();
});

const modal = document.getElementById('CatalogoModal');
const abrirBtn = document.getElementById('btn-catalogo');
const contenedorScroll = document.querySelector('.caracteristicasModal');

// Abrir el modal de forma modal (bloquea el fondo)
abrirBtn.addEventListener('click', () => {
modal.showModal();
contenedorScroll.scrollTop = 0;
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    // Alterna la clase "active" para mostrar u ocultar el menú
    navMenu.classList.toggle('active');
});