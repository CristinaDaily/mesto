export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //add all card items
  renderItems() {
    this._items.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }

  deleteItem(item) {
    item.remove();
  }
}
