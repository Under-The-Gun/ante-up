// const request = require('superagent');
const socket = require('socket.io-client')('http://localhost:7890');
const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');



const logInPrompt = () => 
  inquirer.prompt(loginInput)
    .then(data => {
      socket.emit('login', data);
      socket.on('login-successful', () => {
        console.log('You\'ve logged in successfully');
        //if first user in room dealer prompt
        //else out of turn prompt
        
      });
      socket.on('login-unsuccessful', () => {
        console.log('You could not be logged in.');
        logInPrompt();
      });
    });
const signUpPrompt = () => 
  inquirer.prompt(signUpInput)
    .then(data => {
      socket.emit('signup', data);
      socket.on('sign-up-successful', () => {
        console.log('You\'ve signed up successfully, now please log in.');
        logInPrompt();
      });
      socket.on('sign-up-unsuccessful', () => {
        console.log('You could not be signed up properly, please try again.');
        signUpPrompt();
      });
    });
  // });
  
module.exports = { signUpPrompt, logInPrompt };

