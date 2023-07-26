import './index.css';

import { Card } from '../components/Сard.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConformation } from '../components/PopupWithConfirmation.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { validationConfig } from '../utils/validation-config.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api';
import {
  buttonEdit,
  nameInput,
  jobInput,
  buttonAdd,
  profilePopupForm,
  cardPopupForm,
  popupInputs,
  avatarPopupForm,
  avatarEditBtn,
} from '../utils/constants.js';

let cardList;
let currentUser;

const openProfile = () => {
  const { name, about } = profileInfo.getUserInfo();

  nameInput.value = name;
  jobInput.value = about;

  popupEditProfile.open();
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  headers: {
    authorization: 'b334b420-c534-4216-b0c2-8d90ef156992',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cardsData]) => {
    // Render user information
    profileInfo.setUserInfo({
      name: userInfo.name,
      about: userInfo.about,
      currentUser: userInfo._id,
    });
    profileInfo.setAvatar(userInfo.avatar);
    currentUser = userInfo._id;

    // Render initial cards
    cardList = new Section(
      {
        items: cardsData,
        renderer: createCard,
      },
      '.elements'
    );

    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const handleCardClick = (link, name) => popupWithImage.open(link, name);
const handelDeleteClick = (cardItem, cardElement) => {
  api
    .deleteCard(cardItem._id)
    .then(() => {
      cardList.deleteItem(cardElement); //delete method from class Section
      popupTypeConfirm.close();
    })
    .catch((err) => console.log(err));
};

const createCard = (cardData) => {
  const card = new Card(cardData, '#element-template', currentUser, {
    handleCardClick,
    handleCardLike: (cardData) => {
      api
        .addLike(cardData._id)
        .then((res) => card.updateLikes(res.likes))
        .catch((err) => console.log(err));
    },
    handleCardDislike: (cardData) => {
      api
        .deleteLike(cardData._id)
        .then((res) => card.updateLikes(res.likes))
        .catch((err) => console.log(err));
    },
    handleCardDelete: popupTypeConfirm.open.bind(popupTypeConfirm),
  });
  return card.generateCard();
};

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile',
  (formData) => {
    api
      .editProfile({
        name: formData.name,
        about: formData.about,
      })
      .then((updaterInfo) => {
        profileInfo.setUserInfo({
          name: updaterInfo.name,
          about: updaterInfo.about,
        });
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
  }
);
const popupTypeAvatar = new PopupWithForm('.popup_type_avatar', (formData) => {
  api
    .setAvatar(formData.link)
    .then((res) => {
      profileInfo.setAvatar(res.avatar);
      popupTypeAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupTypeAvatar.renderLoading(false);
    });
});

const popupTypeCard = new PopupWithForm('.popup_type_card', (formData) => {
  api
    .addNewCard({
      name: formData.name,
      link: formData.link,
    })
    .then((newCard) => {
      const cardElement = createCard(newCard);
      cardList.addItem(cardElement);
      popupTypeCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupTypeCard.renderLoading(false);
    });
});

const popupTypeConfirm = new PopupWithConformation(
  '.popup_type_confirm',
  handelDeleteClick
);

// Set event listeners for the form popups
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupTypeCard.setEventListeners();
popupTypeConfirm.setEventListeners();
popupTypeAvatar.setEventListeners();

const profileInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__occupation',
  avatarSelector: '.profile__avatar',
});

//экземпляр валидации для каждой формы
const profileValidation = new FormValidator(validationConfig, profilePopupForm);
const cardValidation = new FormValidator(validationConfig, cardPopupForm);
const avatarValidation = new FormValidator(validationConfig, avatarPopupForm);

profileValidation.enableValidation();
cardValidation.enableValidation();
avatarValidation.enableValidation();

//open Add Cards popup
buttonAdd.addEventListener('click', () => {
  popupTypeCard.open(); //openPopup(popupAddCard);
  cardValidation.disableSubmitButton(); //disableSubmitButton(cardSaveButton);

  //Reset error state when opening a popup
  cardValidation.removeValidationErrors(popupInputs);
});

buttonEdit.addEventListener('click', openProfile);

avatarEditBtn.addEventListener('click', () => {
  popupTypeAvatar.open();
  avatarValidation.disableSubmitButton();
  avatarValidation.removeValidationErrors(popupInputs);
});
