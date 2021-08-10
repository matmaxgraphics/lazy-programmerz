//Navbar Toggling
function classToggle() {
  const navs = document.querySelectorAll('.navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
}

document.querySelector('.navbar__link-toggle')
  .addEventListener('click', classToggle);