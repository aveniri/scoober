import { GameStatuses, GameActions, GameDispatchTypes, Move, GameState, Players } from "./GameTypes";

const initialState = {
  moves: [
    {
      input: 0,
      remainder: 0,
      result: 100,
      player: Players.ME,
    },
  ],
  status: GameStatuses.PROGRESS,
};

const GameReducer = (state: GameState = initialState, action: GameDispatchTypes): GameState => {
  switch (action.type) {
    case GameActions.NEXT_MOVE: {
      return {
        ...state,
        moves: state.moves.concat(action.payload as Move),
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
