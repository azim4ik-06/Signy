const navbarToggle = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');

navbarToggle.addEventListener('click', navbarShow);
function navbarShow() {
    collapse.classList.toggle('show');
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