document.addEventListener("DOMContentLoaded", function() {
  // Animazioni al caricamento della pagina
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 0;
  setTimeout(() => heroContent.style.opacity = 1, 500);

  // Animazioni sui progetti (hover)
  const projects = document.querySelectorAll('.project img');
  projects.forEach(project => {
    project.addEventListener('mouseover', () => {
      project.style.transform = 'scale(1.05)';
    });
    project.addEventListener('mouseout', () => {
      project.style.transform = 'scale(1)';
    });
  });

  // Scroll animato per il form
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Messaggio inviato!");
  });
});
