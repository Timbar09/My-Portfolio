// Storage functions

const storeUserInfo = () => {
  const theUser = {};
  const userName = document.querySelector('#name').value;
  const userEmail = document.querySelector('#email').value;
  const userMessage = document.querySelector('#message').value;

  if (userName && userEmail && userMessage) {
    theUser.name = userName;
    theUser.email = userEmail;
    theUser.message = userMessage;

    // Saving to local storage
    localStorage.setItem('theUser', JSON.stringify(theUser));
  }
};

const retrieveUserInfo = () => {
  // Retrieving from local storage
  const userInfo = JSON.parse(localStorage.getItem('theUser'));

  if (userInfo) {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name) {
      name.value = userInfo.name;
    }

    if (email) {
      email.value = userInfo.email;
    }

    if (message) {
      message.value = userInfo.message;
    }
  }
};

export { storeUserInfo, retrieveUserInfo };
