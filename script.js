// year
document.getElementById('yr').textContent = new Date().getFullYear();

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .about-img, .about-text, .section-head, .contact h2, .big-mail').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1)';
  io.observe(el);
});

// nav shrink on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.padding = '14px 40px';
    nav.style.background = 'rgba(11,11,12,.85)';
  } else {
    nav.style.padding = '';
    nav.style.background = '';
  }
});

// subtle parallax on hero bg
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight && heroBg) {
    heroBg.style.transform = `scale(1.08) translateY(${y * 0.25}px)`;
  }
});
