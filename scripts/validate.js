const popupForm = document.querySelector('.popup__form');

const formSubmitButtonChangeState = (form) => {
  const button = document.querySelector('.popup__button');
  if (!form.checkValidity()) {
    button.setAttribute('disabled', true);
    button.classList.add('popup__button_disabled');
  } else {
    button.removeAttribute('disabled');
    button.classList.remmove('popup__button_disabled');
  }
};

const getErrorElement = (input) => {
  return document.querySelector(`.${input.id}-error`);
};

const showError = (input) => {
  input.classList.add('popup__input_type_error');
  const errorMassage = getErrorElement(input);
  errorMassage.textContent = input.validationMessage;
};
const hideError = (input) => {
  const errorMassage = getErrorElement(input);
  input.classList.remove('popup__input_type_error');
  errorMassage.textContent = '';
};

//Функция проверки валидности поля
const validateInput = (input) => {
  if (!input.validity.valid) {
    showError(input);
  } else {
    hideError(input);
  }
};

export { validateInput, formSubmitButtonChangeState };
