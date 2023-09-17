const isEmailLowerCase = () => {
  const userEmail = document.querySelector('#email');

  return userEmail.value === userEmail.value.toLowerCase();
};

const showCaseError = () => {
  const userEmail = document.querySelector('#email');
  const formField = userEmail.parentElement;

  formField.classList.remove('valid');
  formField.classList.add('invalid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = 'All letters must be lowercase';
};

const showCaseSuccess = () => {
  const userEmail = document.querySelector('#email');
  const formField = userEmail.parentElement;

  formField.classList.remove('invalid');
  formField.classList.add('valid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = '';
};

export { isEmailLowerCase, showCaseError, showCaseSuccess };
