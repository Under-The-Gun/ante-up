const io = require('socket.io-client');
const server = require('../lib/app');


let socket;

describe('login signup', () => {

  beforeEach(done => {
    console.log('Trying to connect client in beforeEach...');
    socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
      console.log('Client connected in beforeEach.');
      done();
    });
  });

  afterEach(done => {
    socket.disconnect();
    done();
  });

  describe('socket-test', () => {

    //Use socket to emit and listen to events on the client side

    it('handles bad login', () => {
      socket.emit('login', {
        username: 'Danny',
        password: '123'
      });
      socket.on('login-unsuccessful', message => {
        console.log('login-unsuccessful!!', message);
      });
    });

  });
});
