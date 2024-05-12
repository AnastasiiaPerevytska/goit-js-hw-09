const formData = {
  email: "",
  message: "",
};

const formContainer = document.querySelector(".form");
formContainer.innerHTML = createFormMarkup();

const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleFormInput);
window.addEventListener("DOMContentLoaded", fillFormData);
form.addEventListener("submit", handleSubmit);

function createFormMarkup() {
  return `
        <form class="feedback-form" autocomplete="off">
            <label>
                Email
                <input type="email" name="email" autofocus />
            </label>
            <label>
                Message
                <textarea name="message" rows="8"></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    `;
}

function handleFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
}

function fillFormData() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formData.email = savedFormData.email || '';
    formData.message = savedFormData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  clearFormData();
}

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function clearFormData() {
  localStorage.removeItem('feedback-form-state');
  form.reset();
}