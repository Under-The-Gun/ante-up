const request = require('superagent')
    ;
const inquirer = require('inquirer');
const loginInput = require('./loginInput');
const signUpInput = require('./signupInput');

const logInPrompt = () => 
  inquirer.prompt(loginInput)
    .then(credentials => {
      let user = {
        username: credentials.username,
        password: credentials.password
      };
      return request
        .post('/api/auth/login')
        .send(user)
        .then(({ body }) => {
          user = body;
        });
    });
const signUpPrompt = () => 
  inquirer.prompt(signUpInput)
    .then(credentials => {
      let user = {
        username: credentials.username,
        password: credentials.password
      };
      return request
        .post('/api/auth/signup')
        .send(user)
        .then(({ body }) => {
          user = body;
        });
    });
module.exports = { signUpPrompt, logInPrompt };

