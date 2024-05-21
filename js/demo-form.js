const formControl = document.querySelector(".needs-validation-demo");
const nameInputControl = document.querySelector("#validationDefault01");
const emailInputControl = document.querySelector("#validationDefault02");
const subjectInput = document.querySelector("#validationDefaultUsernameDemo");

console.log(formControl);
formControl.addEventListener("submit", addFormControl);

const formsControl = [];
if (localStorage.getItem('formsControl')) {
  formsControl = JSON.parse(localStorage.getItem('formsControl'));
}

function addFormControl(evt) {
  evt.preventDefault();
  const emailValue = emailInputControl.value.trim();
  const nameValue = nameInputControl.value.trim();
  const subjectValue = subjectInput.value.trim();

  emailInputControl.classList.remove("is-invalid");
  emailInputControl.classList.remove("is-valid");

  nameInputControl.classList.remove("is-invalid");
  nameInputControl.classList.remove("is-valid");

  subjectInput.classList.remove("is-invalid");
  subjectInput.classList.remove("is-valid");

  const isValid = formControl.checkValidity();

  if (!isValid) {
    emailInputControl.classList.add("is-invalid");
    nameInputControl.classList.add("is-invalid");
    subjectInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    nameInputControl.classList.add("is-valid");
    subjectInput.classList.add("is-valid");
  }

  if (!isValid) {
    return;
  }

  const newForm = {
    id: crypto.randomUUID(),
    name : nameValue,
    email: emailValue,
    phone: subjectValue
  };

  formsControl.push(newForm);
  localStorage.setItem('formsControl', JSON.stringify(formsControl));

  emailInputControl.value = '';
  nameInputControl.value = '';
  subjectInput.value = '';
}