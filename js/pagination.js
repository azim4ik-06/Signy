const pagination = document.querySelectorAll('.row-pagination');
const paginationLinks = document.querySelectorAll('.page-item');
const nextLink = document.querySelector('.page-item:last-child');

let currentPage = 0;
let totalPages = pagination.length;

function showPage(pageNumber) {
  pagination.forEach((slide, index) => {
    slide.classList.remove('active');
    paginationLinks[index].classList.remove('active');
  });

  pagination[pageNumber].classList.add('active');
  paginationLinks[pageNumber].classList.add('active');
  currentPage = pageNumber;
}

paginationLinks.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(i);
  });
});

nextLink.addEventListener('click', (e) => {
  e.preventDefault();
  let nextPage = (currentPage + 1) % totalPages;
  showPage(nextPage);
});