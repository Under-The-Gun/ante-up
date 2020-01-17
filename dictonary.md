
<!-- In Poker.js -->
socket.on('connect')
socket.emit('get-user-count')
socket.on('dealer-options)
socket.emit('player-readied-up')
socket.on('players-ready')
socket.emit('deal-player-cards')
socket.on('your-cards')
socket.on('game-board-cards')
socket.on('winning-data')
socket.on('waiting-for-ready')
socket.on('out-of-turn-options')
socket.on('player-joined-table')


 <!-- userLoginSignIn.js -->
  socket.emit('login')
  socket.on('login-successful')
  socket.on('login-unsuccessful')
  socket.emit('signup')
  socket.on('sign-up-successful')
  socket.on('sign-up-unsuccessful')

  <!-- pokerSocket.js -->
  socket.emit('players-ready')
  socket.emit('waiting-for-ready')
  socket.on('signup')
  socket.emit('sign-up-successful')
  socket.emit('sign-up-unsuccessful')
  socket.emit('signup-login')
  socket.on('login')
  socket.broadcast.emit('user-connected')
  socket.emit('login-successful')
  socket.emit('login-unsuccessful', 'Invalid username or password!')
  socket.on('disconnect')
  socket.on('player-readied-up')
  socket.on('get-user-count')
  socket.on('deal-player-cards')
  io.to(`${socketId}`).emit('your-cards')
  io.emit('game-board-cards')
  io.emit('winning-data')
  <!-- app.js -->
io.on('connection')