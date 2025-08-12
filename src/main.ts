const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement | null;
const mobileNav = document.getElementById('mobileNav') as HTMLElement | null;

menuBtn?.addEventListener('click', () => {
  mobileNav?.classList.toggle('hidden');
});

const contactForm = document.querySelector<HTMLFormElement>('#contact form');

contactForm?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  alert('Merci ! Votre message a bien été envoyé.');
  contactForm.reset();
});
