const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");

const togglePopupStatus = function (popupToToggle) {
  popupToToggle.classList.toggle("popup_opened");
};

editButton.addEventListener("click", () => {
  togglePopupStatus(popup);
});

popupCloseButton.addEventListener("click", () => {
  togglePopupStatus(popup);
});
