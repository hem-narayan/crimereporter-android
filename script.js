document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const interactiveEls = document.querySelectorAll('button, .panel, .report-card, .stat-card, .nav-item');
interactiveEls.forEach((el) => {
  el.addEventListener('pointermove', (event) => {
    const rect = el.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - offsetY) * 8;
    const rotateY = (offsetX - 0.5) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  el.addEventListener('pointerleave', () => {
    el.style.transform = '';
  });
});
