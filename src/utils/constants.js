export {
  buttonEdit,
  nameInput,
  jobInput,
  buttonAdd,
  popupAddCard,
  profilePopupForm,
  cardPopupForm,
  popupInputs,
  profileName,
  profileAbout,
  profileAvatar,
};
const buttonEdit = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const jobInput = popupForm.querySelector('.popup__input_type_about');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const profilePopupForm = document.querySelector('.popup__form_type_profile');
const cardPopupForm = document.querySelector('.popup__form_type_card');
const popupInputs = popupAddCard.querySelectorAll('.popup__input');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__occupation');
const profileAvatar = document.querySelector('.profile__avatar');
