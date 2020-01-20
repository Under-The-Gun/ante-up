/* eslint-disable no-unused-vars */
const colors = require('colors');
const signUpInput = [
  {
    type: 'input',
    name: 'username',
    message: 'Please enter username.'.green.bold,
    validate: username => {
      if(username.length !== 0) {
        return true;
      } else {
        return 'Please enter a valid username'.red.bold;
      }
    }
  },
  {
    type: 'password',
    name: 'password',
    message: 'Please enter a password'.green.bold,
    validate: pass => {
      if(pass.length !== 0) {
        return true;
      } else {
        return 'Please enter a valid password'.red.bold;
      }
    }
  }
];


module.exports = signUpInput;
