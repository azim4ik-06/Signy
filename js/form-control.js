  const form = document.querySelector(".needs-validation-form");
  const emailInput = document.querySelector("#validationCustomUsername");
console.log(form);
  form.addEventListener("submit", addForm);

  let forms = [];
  if (localStorage.getItem('forms')) {
    forms = JSON.parse(localStorage.getItem('forms'));
  }

  function addForm(evt) {
    evt.preventDefault();
    const emailValue = emailInput.value.trim();

    emailInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-valid");

    const isValid = form.checkValidity();

    if (!isValid) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.add("is-valid");
    }

    if (!isValid) {
      return;
    }

    const newForm = {
      id: crypto.randomUUID(),
      email: emailValue,
    };

    forms.push(newForm);
    localStorage.setItem('forms', JSON.stringify(forms));

    emailInput.value = '';
  }