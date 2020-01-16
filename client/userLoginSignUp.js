// const request = require('superagent');
const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');




const logInPrompt = (socket) =>
  inquirer.prompt(loginInput)
    .then(data => {
      socket.emit('login', data);
      return new Promise((resolve, reject) => {
        socket.on('login-successful', () => {
          console.log('You\'ve logged in successfully');
          resolve();
        });
        socket.on('login-unsuccessful', () => {
          console.log('You could not be logged in.');
          reject();
        });
      });

    });
const signUpPrompt = (socket) => 
  inquirer.prompt(signUpInput)
    .then(data => {
      socket.emit('signup', data);
      return new Promise((resolve, reject) => {
        socket.on('sign-up-successful', () => {
          console.log('You\'ve signed up successfully, now please log in.');
          resolve();
        });
        socket.on('sign-up-unsuccessful', () => {
          console.log('You could not be signed up properly, please try again.');
          reject();
        });
      });
    });
  
module.exports = { signUpPrompt, logInPrompt };

