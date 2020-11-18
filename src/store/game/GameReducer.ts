import { GameStatus, GameActions, GameDispatchTypes, Move, GameState, Players, Connection } from "./GameTypes";

const initialState = {
  moves: [],
  status: GameStatus.ENTRY,
  playerTurn: Players.ME,
  playerId: 0,
  opponentOnline: false,
};

const GameReducer = (state: GameState = initialState, action: GameDispatchTypes): GameState => {
  switch (action.type) {
    case GameActions.CONNECTED: {
      const { playerId, opponentOnline } = action.payload as Connection;
      return {
        ...state,
        playerId,
        opponentOnline,
      };
    }
    case GameActions.OPPONENT_STATUS: {
      return {
        ...state,
        opponentOnline: action.payload as boolean,
      };
    }
    case GameActions.NEXT_MOVE: {
      const nextMove = { ...(action.payload as Move) };

      const status =
        nextMove.result > 1 ? GameStatus.PLAYING : nextMove.player === Players.ME ? GameStatus.WON : GameStatus.LOST;

      return {
        ...state,
        moves: nextMove.firstMove ? [nextMove] : state.moves.concat(nextMove),
        status,
        playerTurn: nextMove.player === Players.ME ? Players.OPPONENT : Players.ME,
      };
    }
    default:
      return state;
  }
};

export default GameReducer;
