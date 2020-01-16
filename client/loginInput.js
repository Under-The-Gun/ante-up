/* eslint-disable no-unused-vars */
const colors = require('colors');
const loginInput = [
  {
    type: 'input',
    name: 'username',
    message: 'Please enter Username.'.green.bold,
    validate: username => {
      if(username.length !== 0) {
        return true;
      } else {
        return 'Please enter a valid username';
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
        return 'Please enter a valid password';
      }
    }
  }
]
    ;
module.exports = loginInput;
