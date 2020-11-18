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

  socket.on('next_move', ({input = 0, firstMove = false}) => {
    let nextMove;
    if(firstMove) {
      moves = [];
      const remainder = Math.round(Math.random() * 100 + 40);
      const newMove = getNextMove(input, remainder, socket.playerId);
      nextMove = {
        ...newMove,
        firstMove: true
      }
    } else {
      const { result: remainder } = moves.slice(-1)[0] || {};
      nextMove = getNextMove(input, remainder, socket.playerId);
    }

    // send back my calculated move
    socket.emit('next_move', nextMove);

    if(usersOnline > 1) {
      socket.broadcast.emit('opponent_next_move', nextMove);
    } else if(nextMove.result > 1) {
      const { result: remainder } = moves.slice(-1)[0] || {};
      const randomInput = randomInputPick([-1, 0, 1]);
      const randomMove = getNextMove(randomInput, remainder, -1);
      socket.emit('computer_next_move', randomMove);
    }
  });

  socket.on('disconnect', () => {
    --usersOnline;
    socket.broadcast.emit('opponent_status', "offline");
  });
});
