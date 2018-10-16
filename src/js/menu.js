var openMenu = document.querySelector('._open-menu');
var closeMenu = document.querySelector('._close-menu');
var menu = document.querySelector('._menu');

openMenu.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.add('active');
});

closeMenu.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.remove('active');
});
