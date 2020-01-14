const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = shuffle(newDeck());

const users = {};

module.exports = (io, socket) => {
  socket.on('sign-up', (user) => {
    // hit user route and create user
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.name);
  });

  socket.on('log-in', (user) => {
    // hit user route and create user
  });

  socket.on('disconnect', () => {
    // hit user route and create user
    socket.broadcast.emit('user-disconnected', users[socket.id].name);
    delete users[socket.id].name;
  });

  socket.on('request-cards', () => {
    // hit user route and create user
  });

  socket.on('see-table', () => {
    // hit user route and create user
  });

  socket.on('global-chat', (message) => {
    socket.broadcast.emit('global-chat', { message: message, name: users[socket.id].name });
  });
};
