require('dotenv').config();
const io = require('socket.io-client');
const server = require('../lib/app');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

let socket;

describe('login signup', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(done => {
    console.log('Trying to connect client in beforeEach...');
    socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
      console.log('Client connected in beforeEach.');
      done();
    });
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterEach(done => {
    socket.disconnect();
    done();
  });

  //Use socket to emit and listen to events on the client side

  it('handles bad login', (done) => {
    socket.on('login-unsuccessful', message => {
      expect(message).toEqual('Invalid username or password!');
      done();
    });
    socket.emit('login', {
      username: 'Danny',
      password: '123'
    });
  });


  it('can create a user account', (done) => {
    socket.on('sign-up-successful', user => {
      console.log(user);
      done();
      expect(user).toEqual({
        username: 'Danny H',
        password: '123'
      });
    });
    socket.emit('signup', {
      username: 'Danny H',
      password: '123'
    });
    
  });

});
