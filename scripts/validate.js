const popupFormObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const formSubmitButtonChangeState = (form) => {
  const button = form.querySelector(popupFormObject.submitButtonSelector);

  if (!form.checkValidity()) {
    button.setAttribute('disabled', true);
    button.classList.add(popupFormObject.inactiveButtonClass);
  } else {
    button.removeAttribute('disabled');
    button.classList.remove(popupFormObject.inactiveButtonClass);
  }
};

const getErrorElement = (input) => {
  return document.querySelector(`.${input.id}-error`);
};

const showError = (input) => {
  input.classList.add(popupFormObject.inputErrorClass);
  const errorMassage = getErrorElement(input);
  errorMassage.textContent = input.validationMessage;
};
const hideError = (input) => {
  const errorMassage = getErrorElement(input);
  input.classList.remove(popupFormObject.inputErrorClass);
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

const setEventListeners = () => {
  const popupInputList = Array.from(
    document.querySelectorAll(popupFormObject.formSelector)
  );
  popupInputList.forEach((popupForm) => {
    popupForm.addEventListener(
      'input',
      (evt) => {
        const input = evt.target;
        const form = evt.currentTarget;

        validateInput(input);
        formSubmitButtonChangeState(form);
      },
      true
    );
  });
};

export { formSubmitButtonChangeState, setEventListeners, popupFormObject };
