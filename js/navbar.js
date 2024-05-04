const navbarToggle = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
const dropDown = document.querySelectorAll('.dropdown-toggle');
const dropMenu = document.querySelectorAll('.dropdown-menu');

navbarToggle.addEventListener('click', navbarShow);
function navbarShow() {
    collapse.classList.toggle('show');
}

for (let i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener('click', dropShow.bind(null, i));
  }
  
  function dropShow(index) {
    dropMenu[index].classList.toggle('show');
  }