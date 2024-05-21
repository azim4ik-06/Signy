const navbarToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarMenu');
const menuSm = document.querySelector('#navbarMenuSm');
const collapse = document.querySelector('.collapse');
const overlay = document.querySelector('.overlay');
const closeNavbar = document.querySelector('.btn-X');
const closeNavbarSm = document.querySelector('.btn-X-sm');
const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');

navbarToggle.addEventListener('click', navbarShow);
function navbarShow() {
    collapse.classList.toggle('show');
    menu.classList.toggle('d-none');
    menuSm.classList.toggle('d-none')
    overlay.classList.toggle('d-none');
}

let dropShow = function(manual) {
  dropMenu.forEach((btn, index) => {
    if (index !== manual) {
      btn.classList.remove('show');
    }
  });

  dropMenu[manual].classList.toggle('show');
};

dropDown.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    dropShow(i);
  });

  dropMenu[i].addEventListener('click', () => {
    dropShow(i);
  });
});

closeNavbar.addEventListener('click', closeNav);
function closeNav() {
    collapse.classList.toggle('show');
    menu.classList.toggle('d-none');
    overlay.classList.toggle('d-none');
    menuSm.classList.toggle('d-none');
}

closeNavbarSm.addEventListener('click', closeNavSm);
function closeNavSm(){
  collapse.classList.toggle('show');
  menu.classList.toggle('d-none');
  overlay.classList.toggle('d-none');
  menuSm.classList.toggle('d-none');
}