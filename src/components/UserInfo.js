export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._profileName.textContent = name;
    console.log(this._profileName.textContent);
    this._profileAbout.textContent = about;
  }
}
