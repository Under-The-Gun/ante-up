const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = newDeck();
shuffle(exampleDeck);

const users = {};
module.exports = (io, socket) => {
  //   socket.on('sign-up', (user) => {
  //     // hit user route and create user
  //   });
        
  socket.on('log-in', (user) => {
    // hit user route and create user
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.name);
  });
        
  socket.on('disconnect', () => {
    // hit user route and create user
    socket.broadcast.emit('user-disconnected', users[socket.id].name);
    delete users[socket.id];
  });
        
  socket.on('your-hold-cards', () => {
    // let numberOfClients = Object.keys(users).length;
    //   if(exampleDeck.length < 2) exampleDeck = shuffle(newDeck(), 1000);
    Object.keys(users).forEach(socketId => {
      let handArray = [exampleDeck.pop(), exampleDeck.pop()];
      socket.broadcast.to(socketId).emit('your-hold-cards', { holdCards: handArray });
                
    });
  });

  //   socket.on('request-cards', () => {
  //     // hit user route and create user
  //   });

  //   socket.on('see-table', () => {
  //     // hit user route and create user
  //   });

//   socket.on('global-chat', (message) => {
//     socket.broadcast.emit('global-chat', { message: message, name: users[socket.id].name });
//   });
};
