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
const likeBtn = document.querySelector('.element__like-btn');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//Лайк карточки
const likeCard = (event) => {
  const eventTarget = event.target;
  eventTarget.classList.toggle('element__like-btn_active');
};

//Удаление карточки
const deleteCard = (evt) => {
  const trashBtn = document.querySelector('.element__delete-btn');
  const cardToRemove = trashBtn.closest('.element');
  cardToRemove.remove();
};

// Действия с карточками
const renderCard = (link, place) => {
  //Add 6 initial card
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const imageElement = element.querySelector('.element__image');
  const placeElement = element.querySelector('.element__place-name');
  imageElement.src = link;
  placeElement.textContent = place;
  imageElement.alt = place;
  elements.prepend(element);

  document
    .querySelector('.element__like-btn')
    .addEventListener('click', likeCard);

  document
    .querySelector('.element__delete-btn')
    .addEventListener('click', deleteCard);

  //Открытие
  imageElement.addEventListener('click', (evt) => {
    openPopup(popupTypeImage);
    popupImageTitle.textContent = place;
    popupImage.src = link;
    popupImage.alt = place;
  });

  // Закрытие image попап
  popupCloseImageBtn.addEventListener('click', () => {
    closePopup(popupTypeImage);
  });
};

initialCards.forEach((item) => {
  const link = item.link;
  const place = item.name;
  renderCard(link, place);
});

const openPopup = function (popupToOpen) {
  popupToOpen.classList.add('popup_opened');
};

const closePopup = function (popupToClose) {
  popupToClose.classList.remove('popup_opened');
};

//Откытие поп-ап Profile через кнопку релдактирование
editButton.addEventListener('click', () => {
  openPopup(popupEditProfile);

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
});

// Закрытие поп-ап Profile
popupCloseProfileBtn.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

//Откытие Add Cards popup
addButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// Закрытие Add Cards popup
popupCloseCardBtn.addEventListener('click', () => {
  closePopup(popupAddCard);
});

//Обработчик «отправки» формы Profile
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formElement.addEventListener('submit', handleFormSubmit);

//Обработчик добавления карточки
function handleCardSubmit(evt) {
  evt.preventDefault();

  const place = placeInput.value;
  const link = linkInput.value;
  renderCard(link, place);
  closePopup(popupAddCard);
}

cardPopupForm.addEventListener('submit', handleCardSubmit);
