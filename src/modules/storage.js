// Storage functions

const storeUserInfo = () => {
  const theUser = {};
  const userName = document.querySelector('#name').value;
  const userEmail = document.querySelector('#email').value;
  const userMessage = document.querySelector('#message').value;

  theUser.name = userName;
  theUser.email = userEmail;
  theUser.message = userMessage;

  // Saving to local storage
  localStorage.setItem('theUser', JSON.stringify(theUser));
};

const retrieveUserInfo = () => {
  // Retrieving from local storage
  const userInfo = JSON.parse(localStorage.getItem('theUser'));

  if (userInfo) {
    document.querySelector('#name').value = userInfo.name;
    document.querySelector('#email').value = userInfo.email;
    document.querySelector('#message').value = userInfo.message;
  }
};

export { storeUserInfo, retrieveUserInfo };
