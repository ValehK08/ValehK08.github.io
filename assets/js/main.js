document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', function(){
    const opened = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!opened));
    nav.classList.toggle('open');
  });
});
