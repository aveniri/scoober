import {
  Connection,
  ConnectionStatus,
  GameActions,
  GameStatus,
  GameStatuses,
  Move,
  NextMove,
  OpponentStatus,
} from "./GameTypes";

export const connectionStatus = (payload: Connection): ConnectionStatus => ({
  type: GameActions.CONNECTED,
  payload,
});

export const opponentStatus = (payload: boolean): OpponentStatus => ({
  type: GameActions.OPPONENT_STATUS,
  payload,
});

export const startGame = (payload: Move): NextMove => ({
  type: GameActions.START,
  payload,
});

export const nextMove = (payload: Move): NextMove => ({
  type: GameActions.NEXT_MOVE,
  payload,
});

export const wonGame = (): GameStatus => ({
  type: GameActions.OVER,
  payload: GameStatuses.WON,
});

export const lostGame = (): GameStatus => ({
  type: GameActions.OVER,
  payload: GameStatuses.LOST,
});
