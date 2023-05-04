const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__item_el_name");
const jobInput = formElement.querySelector(".popup__item_el_about");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const saveButton = document.querySelector(".popup__save-btn");

const togglePopupStatus = function (popupToToggle) {
  popupToToggle.classList.toggle("popup_opened");
};

//Откытие поп-ап через кнопку релдактирование
editButton.addEventListener("click", () => {
  togglePopupStatus(popup);
});

// Закрытие поп-ап
popupCloseButton.addEventListener("click", () => {
  togglePopupStatus(popup);
});

//Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;

  togglePopupStatus(popup);
}

formElement.addEventListener("submit", handleFormSubmit);
