import { initialCards } from './cards.js';
import {
  formSubmitButtonChangeState,
  setEventListeners,
  popupFormObject,
} from './validate.js';

const popups = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const jobInput = popupForm.querySelector('.popup__input_type_about');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const profilePopupForm = document.querySelector('.popup__form_type_profile');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const elementTemplate = document.querySelector('#element-template').content;
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__img-title');

// Создание карточки
const createCard = (linkValue, placeValue) => {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = linkValue;
  element.querySelector('.element__place-name').textContent = placeValue;
  element.querySelector('.element__image').alt = placeValue;

  //Слушатель на лайк
  const likeBtn = element.querySelector('.element__like-btn');
  likeBtn.addEventListener('click', () => {
    likeCard(likeBtn);
  });

  //Слушатель на удаление карточки
  const deleteBtn = element.querySelector('.element__delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteCard(element);
  });

  // Слушатель на открытие карточки
  element.querySelector('.element__image').addEventListener('click', () => {
    openImagePopup(linkValue, placeValue);
  });

  return element;
};

//Лайк карточки
const likeCard = (likeBtn) => {
  likeBtn.classList.toggle('element__like-btn_active');
};

//Удаление карточки
const deleteCard = (card) => {
  card.remove();
};

//Открытие карточки
const openImagePopup = (link, place) => {
  openPopup(popupTypeImage);
  popupImageTitle.textContent = place;
  popupImage.src = link;
  popupImage.alt = place;
};

//Добавление карточек в разметку
const renderCard = (link, place) => {
  //Add 6 initial card
  const card = createCard(link, place);
  elements.prepend(card);
};

//Инициализация исходных карточек из initialCards
initialCards.forEach((item) => {
  renderCard(item.link, item.name);
});

//Открытие попап
const openPopup = function (popupToOpen) {
  popupToOpen.classList.add('popup_opened');
};
//Закрытие попап
const closePopup = function (popupToClose) {
  popupToClose.classList.remove('popup_opened');
};

//Открытие попап профайла
const openProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
};

//Обработчик «отправки» формы Profile
const sendForm = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  if (!form.checkValidity()) {
    console.log('no good');
  } else {
    console.log('all good');
  }
  if (form === profilePopupForm) {
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    closePopup(popupEditProfile);
  } else if (form === cardPopupForm) {
    const place = placeInput.value;
    const link = linkInput.value;
    renderCard(link, place);
    closePopup(popupAddCard);
  }
};

//Слушатели
//open popup Profile with Edit button
editButton.addEventListener('click', openProfile);

//open Add Cards popup
addButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// to close popups with close button
popupCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    const popuptoClose = closeButton.closest('.popup');
    closePopup(popuptoClose);
  });
});

const closePopupOnOvelay = (popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
};

const closePopupOnEsc = (popup) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
};

// to close popups on overlay and Escape
popups.forEach((popup) => {
  closePopupOnOvelay(popup);
  closePopupOnEsc(popup);
});

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(popupFormObject.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', sendForm);
    formSubmitButtonChangeState(formElement);
  });

  setEventListeners();
};

enableValidation(popupFormObject);
