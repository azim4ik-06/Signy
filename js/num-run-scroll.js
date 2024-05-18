let number = document.querySelector('.run-num'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);

        let interval = setInterval(function() {
            start += 5000000;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            number.innerHTML = addCommas(start);
        }, 0.1);
    }
});

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}