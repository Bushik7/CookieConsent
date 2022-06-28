import { COOKIE_CONSENT_KEY } from './constants';

class CookieConsent {
  constructor(selector) {
    // Управление состоянием
    this.el = document.querySelector(selector);
    if (localStorage.getItem(COOKIE_CONSENT_KEY) !== 'false' && this.el) {
      this.acceptBtn = this.el.querySelector('.cookie-consent__button');
      this.acceptBtn?.addEventListener('click', this.onAccept.bind(this));
    } else {
      this.el.classList.add("hide");
    }
  }
  onAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    this.el.classList.add("hide");
    this.acceptBtn.removeEventListener('click', this.onAccept.bind(this));
  }
}

export default CookieConsent;
