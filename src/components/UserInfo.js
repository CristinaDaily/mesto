export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
    this._userId = null;
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
      currentUser: this._userId,
    };
  }
  setUserInfo({ name, about, currentUser }) {
    this._profileName.textContent = name;
    this._profileAbout.textContent = about;
    this._userId = currentUser;
  }
  setAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }
}
