// Small UI helpers: smooth scroll for internal links and keyboard accessibility
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    const el = document.querySelector(href);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// Simple avatar: initials from name
(() => {
  const avatar = document.getElementById('avatar');
  if(!avatar) return;
  const name = 'Valeh Kazimli';
  const parts = name.split(' ');
  avatar.textContent = parts.length>1 ? (parts[0][0]+parts[1][0]).toUpperCase() : name.slice(0,2).toUpperCase();
})();

