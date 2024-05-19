const accordionTogglers = document.querySelectorAll('.accordion-button');

accordionTogglers.forEach((btn, index) => {
  btn.addEventListener('click', handleAccordionButtonClick);

  if (index === 0) {
    btn.classList.remove('active');

    const targetId = btn.getAttribute('data-bs-target');
    const targetCollapse = document.querySelector(targetId);
    targetCollapse.classList.remove('show');
  }
});

function handleAccordionButtonClick() {
  this.classList.toggle('collapsed');
  this.classList.toggle('active');
  const targetId = this.getAttribute('data-bs-target');
  const targetCollapse = document.querySelector(targetId);
  targetCollapse.classList.toggle('show');
}