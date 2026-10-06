(function(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(!toggle || !links) return;

  function closeMenu(){
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu(){
    links.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    if(links.classList.contains('is-open')) closeMenu(); else openMenu();
  });
  links.addEventListener('click', function(e){
    if(e.target.tagName === 'A') closeMenu();
  });
  document.addEventListener('click', function(e){
    if(!links.contains(e.target) && e.target !== toggle) closeMenu();
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth > 880) closeMenu();
  });
})();
