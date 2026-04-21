const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('navbar-scrolled');
  } else {
    nav.classList.remove('navbar-scrolled');
  }
});

const contactForm = document.querySelector('.contact-card form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Terkirim';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 1600);
  });
}

const searchForms = document.querySelectorAll('.search-form');
searchForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});
