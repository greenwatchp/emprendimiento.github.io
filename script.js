// Animación de entrada para los elementos al cargar la página
window.addEventListener('DOMContentLoaded', (event) => {
    const elementos = document.querySelectorAll('.hero-content, .productos-container, .formulario');
    
    elementos.forEach((elemento) => {
      elemento.style.opacity = '0';
      elemento.style.transform = 'translateY(20px)';
    });
  
    setTimeout(() => {
      elementos.forEach((elemento) => {
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)';
      });
    }, 500);
  });
  
// JavaScript para hacer que los elementos aparezcan al hacer 


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');

    for (const reveal of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const revealPoint = 100; // Ajusta este valor según el momento que quieras que aparezca

      if (elementTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    }
  });
});

// Selecciona los enlaces del menú y las secciones
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section-content');

// Maneja los clics en el menú
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado

    // Obtén el id de la sección a mostrar
    const sectionId = link.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove('visible');
      section.classList.add('oculto');
    });

    // Muestra solo la sección seleccionada
    targetSection.classList.remove('oculto');
    targetSection.classList.add('visible');
  });
});