
/* eslint-disable no-unused-vars */
// const request = require('superagent');
const colors = require('colors');

const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');

const logInPrompt = (socket) =>
  inquirer.prompt(loginInput)
    .then(data => {
      socket.emit('login', data);
      return new Promise((resolve, reject) => {
        socket.on('login-successful', () => {
          console.log('You\'ve logged in successfully'.brightGreen.bold);
          resolve();
        });
        socket.on('login-unsuccessful', () => {
          console.log('You could not be logged in.'.red.underline.bold);
          reject();
        });
      });

    });
const signUpPrompt = (socket) => 
  inquirer.prompt(signUpInput)
    .then(data => {
      socket.emit('signup', data);
      socket.on('sign-up-successful', () => {
        console.log('You\'ve signed up successfully, now please log in.'.brightGreen.bold);
        socket.emit('connect');
      });
      return new Promise((reject) => {
        
        socket.on('sign-up-unsuccessful', () => {
          console.log('You could not be signed up properly, please try again.'.red.underline.bold);
          reject();
        });
      });
    });
  
module.exports = { signUpPrompt, logInPrompt };

