class FormValidator {
  constructor(validationObj, formElement) {
    this._validationObj = validationObj;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(validationObj.inputSelector)
    );
    this._button = formElement.querySelector(
      validationObj.submitButtonSelector
    );
    this._inactiveButtonClass = this._validationObj.inactiveButtonClass;
    this._inputErrorClass = this._validationObj.inputErrorClass;
  }

  _handleFormSubmitButtonChangeState() {
    if (!this._formElement.checkValidity()) {
      this.disableSubmitButton();
    } else {
      this._button.removeAttribute('disabled');
      this._button.classList.remove(this._inactiveButtonClass);
    }
  }

  disableSubmitButton() {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._inactiveButtonClass);
  }

  _handleValidateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._handleShowError(inputElement);
    } else {
      this._handleHideError(inputElement);
    }
  }

  _handleShowError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    const errorMassage = this._GetErrorElement(inputElement);
    errorMassage.textContent = inputElement.validationMessage;
  }

  _handleHideError(inputElement) {
    const errorMassage = this._GetErrorElement(inputElement);
    inputElement.classList.remove(this._inputErrorClass);
    errorMassage.textContent = '';
  }

  _GetErrorElement(inputElement) {
    return document.querySelector(`.${inputElement.id}-error`);
  }

  removeValidationErrors() {
    this._inputList.forEach((input) => {
      this._handleHideError(input);
    });
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleValidateInput(inputElement);
        this._handleFormSubmitButtonChangeState();
      });
    });
  }

  enableValidation() {
    this._handleFormSubmitButtonChangeState();
    this._setEventListeners();
  }
}

export { FormValidator };
