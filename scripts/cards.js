import { openPopup, openImagePopup } from './index.js';
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

class Card {
  constructor(data, templateSelector, openImage) {
    this._link = data.link;
    this._place = data.name;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._place;
    this._element.querySelector('.element__place-name').textContent =
      this._place;

    return this._element;
  }

  _handleOpenPopup() {
    this._openImage(this._link, this._place);
  }

  _handleLike() {
    this._likeBtn.classList.toggle('element__like-btn_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  _setEventListeners() {
    //Слушатель на открытие карточки
    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        this._handleOpenPopup();
      });

    //Слушатель на лайк
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._likeBtn.addEventListener('click', () => {
      this._handleLike();
    });

    //Слушатель на удаление карточки
    this._deleteBtn = this._element.querySelector('.element__delete-btn');
    this._deleteBtn.addEventListener('click', () => {
      this._handleDelete();
    });
  }
}

export { Card, initialCards };
