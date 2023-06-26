import { initialCards } from './initial-cards.js';
import { Card } from './Сard.js';
import { validationConfig } from './validation-config.js';
import { FormValidator } from './FormValidator.js';

const popups = document.querySelectorAll('.popup');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const jobInput = popupForm.querySelector('.popup__input_type_about');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const elements = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const profilePopupForm = document.querySelector('.popup__form_type_profile');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__img-title');
const popupInputs = popupAddCard.querySelectorAll('.popup__input');

//Открытие карточки
const openImagePopup = (link, place) => {
  openPopup(popupTypeImage);
  popupImageTitle.textContent = place;
  popupImage.src = link;
  popupImage.alt = place;
};

//Открытие попап
const openPopup = function (popupToOpen) {
  popupToOpen.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
};
//Закрытие попап
const closePopup = function (popupToClose) {
  popupToClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
};

//Открытие попап профайла
const openProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
};

//Обработчик «отправки» формы Profile
const handleProfileSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

const renderCard = (data) => {
  const card = new Card(data, '#element-template', openImagePopup);
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
};

const handleCardSubmit = (evt) => {
  evt.preventDefault();

  const name = placeInput.value;
  const link = linkInput.value;
  const data = { name, link };
  renderCard(data);
  closePopup(popupAddCard);
  cardPopupForm.reset();
};

//close popups with close button
buttonsClosePopup.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    const popuptoClose = closeButton.closest('.popup');
    closePopup(popuptoClose);
  });
});

const closePopupOnOvelay = (popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
};

const closePopupOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// to close popups on overlay and Escape
popups.forEach((popup) => {
  closePopupOnOvelay(popup);
});

// Инициализация карточек
initialCards.forEach((item) => {
  // экземпляр карточки
  renderCard(item);
});

//экземпляр валидации для каждой формы
const profileValidation = new FormValidator(validationConfig, profilePopupForm);
const cardValidation = new FormValidator(validationConfig, cardPopupForm);

profileValidation.enableValidation();
cardValidation.enableValidation();

//EventListener
//open popup Profile with Edit button
buttonEdit.addEventListener('click', openProfile);

//open Add Cards popup
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  cardValidation.disableSubmitButton();
  //disableSubmitButton(cardSaveButton);
  cardPopupForm.reset();

  //Сброс состояния ошибок при открытии попапа
  cardValidation.removeValidationErrors(popupInputs);
});

// submit for both forms
profilePopupForm.addEventListener('submit', handleProfileSubmit);
cardPopupForm.addEventListener('submit', handleCardSubmit);
