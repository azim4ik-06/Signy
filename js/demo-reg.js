const btnXDemo = document.querySelector('.btn-X-demo');
const btnReg = document.querySelector('.btn-card-reg');
const overlayDemo = document.querySelector('.overlay-demo');
const demoVersion = document.querySelector('.demo-version');
const btnFormDemo = document.querySelector('.btn-form-demo');
const demoThanks = document.querySelector('.demo-thanks');
const btnXDemoThanks = document.querySelector('.btn-X-demo-thanks');

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

btnFormDemo.addEventListener('click', thanksShow);

function thanksShow(){
    demoVersion.classList.toggle('d-none');
    demoThanks.classList.toggle('d-none');
}

btnXDemoThanks.addEventListener('click', closeDemoThanks);

function closeDemoThanks(){
    overlayDemo.classList.toggle('d-none');
    demoThanks.classList.toggle('d-none');
}