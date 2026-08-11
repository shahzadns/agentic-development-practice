const yearElement = document.getElementById('year');
const contactForm = document.getElementById('contact-form');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');

    alert(
      `Thanks for reaching out, ${name}! I’ll follow up at ${email} soon.`
    );
    contactForm.reset();
  });
}
