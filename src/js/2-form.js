const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  let fieldValue = event.target.value;

  if (fieldName === 'email') {
    formData.email = fieldValue.trim();
  } else {
    formData.message = fieldValue.trim();
  }

  const formDataToLS = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataToLS);
};

const onFormSubmit = event => {
  event.preventDefault();
  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
};

// const formDataFromLS = localStorage.getItem('feedback-form-state');
// console.log(JSON.parse(formDataFromLS));

form.addEventListener('input', onFormFieldInput);
form.addEventListener('submit', onFormSubmit);
