import { Popup } from './Popup.js';

export class PopupWithConformation extends Popup {
  constructor(popupSelector, handelDeleteClick) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handelDeleteClick = handelDeleteClick;
    this._submitButton = this._popup.querySelector('.popup__confirm-btn');
  }

  open(cardItem, cardElement) {
    console.log(cardItem);
    console.log(cardElement);
    this._cardItem = cardItem; // card object
    this._cardElement = cardElement; //DOM element
    super.open();
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handelDeleteClick(this._cardItem, this._cardElement);
      this._submitButton.textContent = 'Удаление...';
    });
    super.setEventListeners();
  }
}
