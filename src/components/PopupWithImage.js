import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
  }
  open(link, name) {
    super.open();
    this._popup.querySelector('.popup__image').src = link;
    this._popup.querySelector('.popup__image').alt = name;
    this._popup.querySelector('.popup__img-title').textContent = name;
  }
}
