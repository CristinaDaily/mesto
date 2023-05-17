const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__item_el_name');
const jobInput = formElement.querySelector('.popup__item_el_about');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const elements = document.querySelector('.elements');

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

// Adding initial 6 cards
initialCards.forEach((item) => {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__place-name').textContent = item.name;

  elements.append(element);
});

const openPopup = function (popupToOpen) {
  popupToOpen.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
};

const closePopup = function (popupToClose) {
  popupToClose.classList.remove('popup_opened');
};

//Откытие поп-ап через кнопку релдактирование
editButton.addEventListener('click', () => {
  openPopup(popup);
});

// Закрытие поп-ап
popupCloseButton.addEventListener('click', () => {
  closePopup(popup);
});

//Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', handleFormSubmit);
