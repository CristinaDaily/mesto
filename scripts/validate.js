const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const formSubmitButtonChangeState = (form, config) => {
  const button = form.querySelector(config.submitButtonSelector);

  if (!form.checkValidity()) {
    button.setAttribute('disabled', true);
    button.classList.add(config.inactiveButtonClass);
  } else {
    button.removeAttribute('disabled');
    button.classList.remove(config.inactiveButtonClass);
  }
};

const getErrorElement = (input) => {
  return document.querySelector(`.${input.id}-error`);
};

const showError = (input, config) => {
  input.classList.add(config.inputErrorClass);
  const errorMassage = getErrorElement(input);
  errorMassage.textContent = input.validationMessage;
};
const hideError = (input, config) => {
  const errorMassage = getErrorElement(input);
  input.classList.remove(config.inputErrorClass);
  errorMassage.textContent = '';
};

//Функция проверки валидности поля
const validateInput = (input, config) => {
  if (!input.validity.valid) {
    showError(input, config);
  } else {
    hideError(input, config);
  }
};
const removeValidationErrors = (inputs) => {
  inputs.forEach((input) => {
    hideError(input, validationConfig);
  });
};

const disableSubmitButton = (button) => {
  button.setAttribute('disabled', true);
  button.classList.add('popup__button_disabled');
};

const setEventListeners = (config) => {
  const popupInputList = Array.from(
    document.querySelectorAll(config.formSelector)
  );

  popupInputList.forEach((popupForm) => {
    popupForm.addEventListener(
      'input',
      (evt) => {
        const input = evt.target;
        const form = evt.currentTarget;

        validateInput(input, config);
        formSubmitButtonChangeState(form, config);
      },
      true
    );
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formSubmitButtonChangeState(formElement, config);
  });

  setEventListeners(config);
};

enableValidation(validationConfig);
