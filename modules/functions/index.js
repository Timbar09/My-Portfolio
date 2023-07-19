import { openMenu, closeMenu } from './menu.js';
import { storeUserInfo, retrieveUserInfo } from './storage.js';
import { isEmailLowerCase, showCaseError, showCaseSuccess } from './form.js';
import {
  activatePopup,
  deactivatePopup,
  fillInPopupText,
  clearPopupText,
} from './popup.js';

export {
  openMenu,
  closeMenu,
  activatePopup,
  deactivatePopup,
  isEmailLowerCase,
  showCaseError,
  showCaseSuccess,
  fillInPopupText,
  clearPopupText,
  storeUserInfo,
  retrieveUserInfo,
};
