document.documentElement.classList.add('js');

// mobile menu
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

// reveal on scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .15 });
  items.forEach(el => io.observe(el));
} else items.forEach(el => el.classList.add('in'));

// contact form -> mailto (no backend)
const form = document.getElementById('form');
const note = document.getElementById('note');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const naam = (d.get('naam') || '').trim(), email = (d.get('email') || '').trim(), bericht = (d.get('bericht') || '').trim();
  if (!naam || !/^\S+@\S+\.\S+$/.test(email) || !bericht) {
    note.textContent = 'Vul alstublieft uw naam, een geldig e-mailadres en een bericht in.';
    return;
  }
  const body = `${bericht}\n\n— ${naam} (${email})`;
  location.href = `mailto:connect@stratifynv.com?subject=${encodeURIComponent('Verzoek via website — ' + naam)}&body=${encodeURIComponent(body)}`;
  note.textContent = 'Uw e-mailprogramma wordt geopend om het bericht te versturen.';
});
