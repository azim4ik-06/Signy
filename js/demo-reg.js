const btnXDemo = document.querySelector('.btn-X-demo');
const btnReg = document.querySelector('.btn-card-reg');
const overlayDemo = document.querySelector('.overlay-demo');
const demoVersion = document.querySelector('.demo-version');

btnReg.addEventListener('click', btnDemoShow)

function btnDemoShow(){
    overlayDemo.classList.toggle('d-none');
    demoVersion.classList.toggle('d-none');
}

btnXDemo.addEventListener('click', closeDemo)

function closeDemo(){
    overlayDemo.classList.toggle('d-none');
    demoVersion.classList.toggle('d-none');
}