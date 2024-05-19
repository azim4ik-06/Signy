const btns = document.querySelectorAll('.nav-btn');
const navBtn = document.querySelectorAll('.nav-btn-friend');
const imgCaruisel = document.querySelectorAll('.friend-slide');
const slides = document.querySelectorAll('.header-img');
const contents = document.querySelectorAll('.text-header');

let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () =>{
        sliderNav(i)
    });
});

let sliderNavigation = function(manu){
    navBtn.forEach((nav) => {
        nav.classList.remove('active');
    });
    
    imgCaruisel.forEach((img) => {
        img.classList.remove('active');
    });


    navBtn[manu].classList.add('active')
    imgCaruisel[manu].classList.add('active')
}
navBtn.forEach((btnNavigation, index) => {
    btnNavigation.addEventListener('click', () =>{
        sliderNavigation(index)
    });
});