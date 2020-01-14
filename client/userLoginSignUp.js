// const request = require('superagent');
const socket = require('socket.io-client')('http://localhost:7890');
const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');

const logInPrompt = () => 
  // socket.on('connect', () => {
  inquirer.prompt(loginInput)
    .then(data => {
      console.log(data);
      socket.emit('login', data);
    });
  // });
const signUpPrompt = () => 
  // socket.on('connect', () => {
  inquirer.prompt(signUpInput)
    .then(data => {
      console.log(data);
      socket.emit('signup', data);
    });
  // });
  
module.exports = { signUpPrompt, logInPrompt };

