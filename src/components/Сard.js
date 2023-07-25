export class Card {
  constructor(
    data,
    templateSelector,
    currentUser,
    { handleCardClick, handleCardLike, handleCardDislike, handleCardDelete }
  ) {
    this._data = data;
    this._link = data.link;
    this._place = data.name;
    this._cardId = data.id; // card ID
    this._userId = data.owner._id; // owner/my id

    this._currentUser = currentUser;

    this._likes = data.likes; //array of likes
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this.handleCardDislike = handleCardDislike;
    this.handleCardDelete = handleCardDelete;
    this._isLiked = false;
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
    //check if there are cards with my likes and toggle like button
    this._likes.forEach((like) => {
      if (like._id === this._currentUser) {
        this._isLiked = true;
        return;
      }
    });

    /*this._isLiked = this._likes.some((like) => {
      //console.log(this._currentUser, like._id);
      like._id === this._currentUser;
    });*/

    this._setEventListeners();
    this._setLikeButton(!this._isLiked);

    return this._element;
  }

  _getLikeNumber() {
    const numberOfLikes = this._element.querySelector('.element__likes-number');
    numberOfLikes.textContent = this._likes.length;
  }

  _setLikeButton(isLiked) {
    if (!isLiked) {
      this._likeBtn.classList.add('element__like-btn_active');
    } else {
      this._likeBtn.classList.remove('element__like-btn_active');
    }
  }

  _handleLike() {
    if (!this._isLiked) {
      this._handleCardLike(this._data);
      this._setLikeButton(false); //this._likeBtn.classList.add('element__like-btn_active');
    } else {
      this.handleCardDislike(this._data);
      this._setLikeButton(true); //this._likeBtn.classList.remove('element__like-btn_active');
    }
  }

  updateLikes(likesNumber) {
    const numberOfLikes = this._element.querySelector('.element__likes-number');
    numberOfLikes.textContent = likesNumber.length;

    this._isLiked = !this._isLiked;
  }

  _handleDelete() {
    //this._element.remove();
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
      //this._handleDelete();
      this.handleCardDelete(this._data, this._element);
    });
  }
}
