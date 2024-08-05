let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const loadDataFromLS = key => {
  try {
    const formDataFromLS = localStorage.getItem(key);

    if (formDataFromLS !== null) {
      const parsedData = JSON.parse(formDataFromLS);
      formData = parsedData;
      return parsedData;
    }
  } catch (err) {
    console.log(err);
  }
};

const saveDataToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const fillFormFieldsFromLS = () => {
  const dataFromLS = loadDataFromLS('feedback-form-state');

  if (dataFromLS !== undefined) {
    form.email.value = dataFromLS.email;
    form.message.value = dataFromLS.message;

    return;
  }
};

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  if (fieldName === 'email') {
    formData.email = fieldValue.trim();
  } else {
    formData.message = fieldValue.trim();
  }

  saveDataToLS('feedback-form-state', formData);
};

const onFormSubmit = event => {
  event.preventDefault();

  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
  }
};

form.addEventListener('input', onFormFieldInput);
form.addEventListener('submit', onFormSubmit);

fillFormFieldsFromLS();
