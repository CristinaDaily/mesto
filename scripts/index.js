import { initialCards } from './cards.js';
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupCloseProfileBtn = document.querySelector(
  '.popup__close_type_profile'
);
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__item_el_name');
const jobInput = formElement.querySelector('.popup__item_el_about');
const placeInput = document.querySelector('.popup__item_el_place');
const linkInput = document.querySelector('.popup__item_el_link');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const popupCloseCardBtn = document.querySelector('.popup__close_type_card');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const elementTemplate = document.querySelector('#element-template').content;
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__img-title');
const popupCloseImageBtn = document.querySelector('.popup__close_type_image');

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

//Закритие изображение карточки
const closeImage = () => closePopup(popupTypeImage);

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
const handleFormSubmit = function (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

//Обработчик добавления карточки
const handleCardSubmit = function (evt) {
  evt.preventDefault();

  const place = placeInput.value;
  const link = linkInput.value;
  renderCard(link, place);
  closePopup(popupAddCard);
};

//Слушатели
//закрытие image попап
popupCloseImageBtn.addEventListener('click', closeImage);

//откытие поп-ап Profile через кнопку релдактирование
editButton.addEventListener('click', openProfile);

// закрытие поп-ап Profile
popupCloseProfileBtn.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

//откытие Add Cards popup
addButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// закрытие Add Cards popup
popupCloseCardBtn.addEventListener('click', () => {
  closePopup(popupAddCard);
});

// формы
formElement.addEventListener('submit', handleFormSubmit);
cardPopupForm.addEventListener('submit', handleCardSubmit);
