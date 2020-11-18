const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, { 
  cors: {
    origins: "*:*",
    credentials: true
  }
});

const port = process.env.PORT || 3000;

// Routing
app.use(express.static(path.join(__dirname, '../dist')));

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Game Socket
let moves = [];
const randomInputPick = (list) => list[Math.floor(Math.random() * list.length)];

const calculate = (input, remainder) => {
  return Math.round((input + remainder) / 3);
};

let usersOnline = 0;

io.on('connection', (socket) => {
  console.log('socket id connection --->>>');
  ++usersOnline;
  socket.playerId = Date.now();

  socket.emit('connected', {
    playerId: socket.playerId,
    opponentOnline: usersOnline > 1,
  });  
  socket.broadcast.emit('opponent_status', "online");

  const getNextMove = (input, remainder, playerId) => {
    const result = calculate(input, remainder);
    const nextMove = { input, result, remainder, playerId };
    
    moves.push(nextMove);
    return nextMove;
  }

  socket.on('next_move', ({input = 0, newGame = false}) => {
    let nextMove;
    if(newGame) {
      moves = [];
      const remainder = Math.round(Math.random() * 100 + 40);
      nextMove = getNextMove(input, remainder, socket.playerId);
    } else {
      const { result: remainder } = moves.slice(-1)[0] || {};
      nextMove = getNextMove(input, remainder, socket.playerId);
    }

    // my move
    socket.emit('next_move', nextMove);

    if(usersOnline < 2) {
      const { result: remainder } = moves.slice(-1)[0] || {};
      const randomInput = randomInputPick([-1, 0, 1]);
      const newMove = getNextMove(randomInput, remainder, -1);
      socket.emit('computer_next_move', newMove);
    } else {
      socket.broadcast.emit('opponent_next_move', nextMove);
    }
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    console.log('socket disconnect <<<===');
    --usersOnline;
    socket.broadcast.emit('opponent_status', "offline");
  });
});
