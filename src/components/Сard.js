export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._place = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

  _handleLike() {
    this._likeBtn.classList.toggle('element__like-btn_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    //Слушатель на открытие карточки
    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        this._handleCardClick(this._link, this._place);
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
