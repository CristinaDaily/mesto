(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o){var i=o.handleCardClick,u=o.handleCardLike,a=o.handleCardDislike,l=o.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._link=t.link,this._place=t.name,this._cardId=t.id,this._userId=t.owner._id,this._currentUser=r,this._likes=t.likes,this._templateSelector=n,this._handleCardClick=i,this._handleCardLike=u,this.handleCardDislike=a,this.handleCardDelete=l,this._isLiked=!1}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._deleteBtn=this._element.querySelector(".element__delete-btn"),this._elementImage.src=this._link,this._elementImage.alt=this._place,this._element.querySelector(".element__place-name").textContent=this._place,this._getLikeNumber(),this._userId!==this._currentUser&&(this._deleteBtn.style.display="none"),this._likes.forEach((function(t){t._id!==e._currentUser||(e._isLiked=!0)})),this._setEventListeners(),this._setLikeButton(!this._isLiked),this._element}},{key:"_getLikeNumber",value:function(){this._element.querySelector(".element__likes-number").textContent=this._likes.length}},{key:"_setLikeButton",value:function(e){e?this._likeBtn.classList.remove("element__like-btn_active"):this._likeBtn.classList.add("element__like-btn_active")}},{key:"_handleLike",value:function(){this._isLiked?(this.handleCardDislike(this._data),this._setLikeButton(!0)):(this._handleCardLike(this._data),this._setLikeButton(!1))}},{key:"updateLikes",value:function(e){this._element.querySelector(".element__likes-number").textContent=e.length,this._isLiked=!this._isLiked}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._place)})),this._likeBtn=this._element.querySelector(".element__like-btn"),this._likeBtn.addEventListener("click",(function(){e._handleLike()})),this._deleteBtn.addEventListener("click",(function(){e.handleCardDelete(e._data,e._element)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(t){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,r,o,i=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageName=t._popup.querySelector(".popup__img-title"),t}return t=f,(n=[{key:"open",value:function(e,t){l(s(f.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._imageName.textContent=t}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(i);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._handelDeleteClick=t,n._submitButton=n._popup.querySelector(".popup__confirm-btn"),n}return t=u,(n=[{key:"open",value:function(e,t){console.log(e),console.log(t),this._cardItem=e,this._cardElement=t,d(m(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handelDeleteClick(e._cardItem,e._cardElement)})),d(m(u.prototype),"setEventListeners",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__button"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){console.log(t),e[t.name]=t.value})),e}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохраненить"}},{key:"setEventListeners",value:function(){var e=this;S(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){S(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._profileAvatar=document.querySelector(o),this._userId=null}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent,currentUser:this._userId}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.currentUser;this._profileName.textContent=t,this._profileAbout.textContent=n,this._userId=r}},{key:"setAvatar",value:function(e){this._profileAvatar.src=e}}],n&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"deleteItem",value:function(e){e.remove()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationObj=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._button=n.querySelector(t.submitButtonSelector),this._inactiveButtonClass=this._validationObj.inactiveButtonClass,this._inputErrorClass=this._validationObj.inputErrorClass}var t,n;return t=e,(n=[{key:"_handleFormSubmitButtonChangeState",value:function(){this._formElement.checkValidity()?(this._button.removeAttribute("disabled"),this._button.classList.remove(this._inactiveButtonClass)):this.disableSubmitButton()}},{key:"disableSubmitButton",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._inactiveButtonClass)}},{key:"_handleValidateInput",value:function(e){e.validity.valid?this._handleHideError(e):this._handleShowError(e)}},{key:"_handleShowError",value:function(e){e.classList.add(this._inputErrorClass);var t=this._getErrorElement(e);console.log(t),console.log(e.validationMessage),t.textContent=e.validationMessage}},{key:"_handleHideError",value:function(e){var t=this._getErrorElement(e);e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_getErrorElement",value:function(e){return this._formElement.querySelector(".".concat(e.id,"-error"))}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._handleHideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._handleValidateInput(t),e._handleFormSubmitButtonChangeState()}))}))}},{key:"enableValidation",value:function(){this._handleFormSubmitButtonChangeState(),this._setEventListeners()}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var A,D,x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=document.querySelector(".profile__edit-button"),V=document.querySelector(".popup__form"),F=V.querySelector(".popup__input_type_name"),H=V.querySelector(".popup__input_type_about"),J=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_type_card"),z=document.querySelector(".popup__form_type_profile"),$=document.querySelector(".popup__form_type_card"),G=M.querySelectorAll(".popup__input"),K=(document.querySelector(".profile__name"),document.querySelector(".profile__occupation"),document.querySelector(".profile__avatar"),document.querySelector(".popup__form_type_avatar")),Q=document.querySelector(".profile__edit-icon");function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"b334b420-c534-4216-b0c2-8d90ef156992","Content-Type":"application/json"}});Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie.setUserInfo({name:o.name,about:o.about,currentUser:o._id}),ie.setAvatar(o.avatar),D=o._id,(A=new L({items:i,renderer:Z},".elements")).renderItems()})).catch((function(e){console.log(e)}));var Y=function(e,t){return ee.open(e,t)},Z=function(e){var t=new n(e,"#element-template",D,{handleCardClick:Y,handleCardLike:function(e){X.addLike(e._id).then((function(e){return t.updateLikes(e.likes)})).catch((function(e){return console.log(e)}))},handleCardDislike:function(e){X.deleteLike(e._id).then((function(e){return t.updateLikes(e.likes)})).catch((function(e){return console.log(e)}))},handleCardDelete:oe.open.bind(oe)});return t.generateCard()},ee=new f(".popup_type_image"),te=new w(".popup_type_profile",(function(e){X.editProfile({name:e.name,about:e.about}).then((function(e){ie.setUserInfo({name:e.name,about:e.about}),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))})),ne=new w(".popup_type_avatar",(function(e){X.setAvatar(e.link).then((function(e){ie.setAvatar(e.avatar),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1)}))})),re=new w(".popup_type_card",(function(e){X.addNewCard({name:e.name,link:e.link}).then((function(e){var t=Z(e);A.addItem(t),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)}))})),oe=new b(".popup_type_confirm",(function(e,t){X.deleteCard(e._id).then((function(){A.deleteItem(t),oe.close()})).catch((function(e){return console.log(e)}))}));ee.setEventListeners(),te.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),ne.setEventListeners();var ie=new O({nameSelector:".profile__name",aboutSelector:".profile__occupation",avatarSelector:".profile__avatar"}),ue=new B(q,z),ae=new B(q,$),le=new B(q,K);ue.enableValidation(),ae.enableValidation(),le.enableValidation(),J.addEventListener("click",(function(){re.open(),ae.disableSubmitButton(),ae.removeValidationErrors(G)})),N.addEventListener("click",(function(){var e=ie.getUserInfo(),t=e.name,n=e.about;F.value=t,H.value=n,te.open()})),Q.addEventListener("click",(function(){ne.open(),le.disableSubmitButton(),le.removeValidationErrors(G)}))})();