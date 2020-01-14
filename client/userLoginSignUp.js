// const request = require('superagent');
const socket = require('socket.io-client')('http://localhost:7890');
const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');

const logInPrompt = () => 
  socket.on('connect', () => {
    inquirer.prompt(loginInput)
      .then(data => {
        socket.emit('logIn', data);
      });
  });
const signUpPrompt = () => 
  socket.on('connect', () => {
    inquirer.prompt(signUpInput)
      .then(data => {
        socket.emit('signUp', data);
      });
  });
  
module.exports = { signUpPrompt, logInPrompt };

