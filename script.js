const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
const cards = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:650, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
cards.forEach(card => observer.observe(card));
