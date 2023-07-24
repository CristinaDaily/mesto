export class Card {
  constructor(data, templateSelector, currentUser, handleCardClick) {
    this._link = data.link;
    this._place = data.name;
    this._cardId = data.id; // card ID
    this._userId = data.owner._id; // owner/my id

    this._currentUser = currentUser;
    //this._currentUserId = currentUser._id;
    this._likes = data.likes; //array of likes
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    //this._handleDeleteConfirm = handleDeleteConfirm;
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

    this._elementImage = this._element.querySelector('.element__image');
    this._deleteBtn = this._element.querySelector('.element__delete-btn');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._place;

    this._element.querySelector('.element__place-name').textContent =
      this._place;

    this._getLikeNumber();
    if (this._userId !== this._currentUser) {
      this._deleteBtn.style.display = 'none';
    }

    this._setEventListeners();
    return this._element;
  }

  _getLikeNumber() {
    const numberOfLikes = this._element.querySelector('.element__likes-number');
    numberOfLikes.textContent = this._likes.length;
  }

  _handleLike() {
    this._likeBtn.classList.toggle('element__like-btn_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
    this._elementImage = null;
    this._likeBtn = null;
    this._deleteBtn = null;
  }

  _setEventListeners() {
    //Слушатель на открытие карточки
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._place);
    });

    //Слушатель на лайк
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._likeBtn.addEventListener('click', () => {
      this._handleLike();
    });

    //Слушатель на удаление карточки

    this._deleteBtn.addEventListener('click', () => {
      //this._handleDeleteConfirm(this._cardId, this._element);
      this._handleDelete();
    });
  }
}
