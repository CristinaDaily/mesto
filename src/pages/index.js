import './index.css';

import { initialCards } from '../utils/initial-cards.js';
import { Card } from '../components/Сard.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { validationConfig } from '../utils/validation-config.js';
import { FormValidator } from '../components/FormValidator.js';
import {
  buttonEdit,
  nameInput,
  jobInput,
  buttonAdd,
  popupAddCard,
  profilePopupForm,
  cardPopupForm,
  popupInputs,
} from '../utils/constants.js';

const openProfile = () => {
  const { name, about } = profileInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;

  popupEditProfile.open();
};

const handleCardClick = (link, name) => popupWithImage.open(link, name);

const createCard = (data) => {
  const card = new Card(data, '#element-template', handleCardClick);
  return card.generateCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  '.elements'
);

cardList.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile',
  (formData) => {
    profileInfo.setUserInfo(formData);
    popupEditProfile.close();
  }
);
const popupTypeCard = new PopupWithForm('.popup_type_card', (formData) => {
  const cardElement = createCard(formData);
  cardList.addItem(cardElement);
  popupTypeCard.close();
});

// Set event listeners for the form popups
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupTypeCard.setEventListeners();

const profileInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__occupation',
});

buttonEdit.addEventListener('click', openProfile);

//экземпляр валидации для каждой формы
const profileValidation = new FormValidator(validationConfig, profilePopupForm);
const cardValidation = new FormValidator(validationConfig, cardPopupForm);

profileValidation.enableValidation();
cardValidation.enableValidation();

//open Add Cards popup
buttonAdd.addEventListener('click', () => {
  popupTypeCard.open(); //openPopup(popupAddCard);
  cardValidation.disableSubmitButton(); //disableSubmitButton(cardSaveButton);

  //Сброс состояния ошибок при открытии попапа
  cardValidation.removeValidationErrors(popupInputs);
});
