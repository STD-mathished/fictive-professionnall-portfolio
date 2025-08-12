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

menuBtn?.addEventListener("click", () => {
  mobileNav?.classList.toggle("hidden");
});

// Année dynamique dans le footer
const yearSpan = document.getElementById("year") as HTMLSpanElement | null;
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

const btns = document.querySelectorAll<HTMLButtonElement>(".filter-btn");

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const tag = btn.dataset.filter ?? "all";
    const cards = document.querySelectorAll<HTMLElement>(".project-card");
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/);
      const show = tag === "all" || tags.includes(tag);
      card.style.display = show ? "" : "none";
    });

    // état actif visuel
    btns.forEach((b) => b.classList.remove("bg-zinc-900", "text-white"));
    btn.classList.add("bg-zinc-900", "text-white");
  })
);
