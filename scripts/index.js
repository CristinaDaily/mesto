const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__item_el_name');
const jobInput = formElement.querySelector('.popup__item_el_about');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const openPopup = function (popupToOpen) {
  popupToOpen.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
};

const closePopup = function (popupToClose) {
  popupToClose.classList.remove('popup_opened');

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
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
  closePopup(popup);
}

formElement.addEventListener('submit', handleFormSubmit);
