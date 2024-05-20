const form = document.querySelector(".needs-validation");
const emailInput = document.querySelector("#validationCustomUsername");

form.addEventListener("submit", addForm);

const forms = [];
if (localStorage.getItem('forms')) {
    const formsJSON = localStorage.getItem('forms');
    const formArr = JSON.parse(formsJSON);
    forms.push(...formArr);
    console.log(forms);
}

function addForm(evt) {
    evt.preventDefault();
    const emailValue = emailInput.value.trim();

    emailInput.classList.remove("is-invalid");

    const isValid = form.checkValidity(); 


    if (!isValid) {

        emailInput.classList.add("is-invalid");
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