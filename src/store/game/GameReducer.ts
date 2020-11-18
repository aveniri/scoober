import { GameStatuses, GameActions, GameDispatchTypes, Move, GameState, Players, Connection } from "./GameTypes";

const initialState = {
  moves: [],
  status: GameStatuses.ENTRY,
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
    case GameActions.START:
    case GameActions.NEXT_MOVE: {
      const nextMove = { ...(action.payload as Move) };
      nextMove.player = nextMove.playerId === state.playerId ? Players.ME : Players.OPPONENT;

      const gameStatus =
        nextMove.result > 1
          ? GameStatuses.PLAYING
          : nextMove.player === Players.ME
          ? GameStatuses.WON
          : GameStatuses.LOST;

      return {
        ...state,
        moves: state.moves.concat(nextMove),
        status: gameStatus,
        playerTurn: nextMove.player === Players.ME ? Players.OPPONENT : Players.ME,
      };
    }
    case GameActions.OVER: {
      return {
        ...state,
        status: action.payload as GameStatuses,
      };
    }
    default:
      return state;
  }
};

export default GameReducer;
