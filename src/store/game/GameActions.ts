import { Connection, ConnectionStatus, GameActions, Move, NextMove, OpponentStatus } from "./GameTypes";

export const connectionStatus = (payload: Connection): ConnectionStatus => ({
  type: GameActions.CONNECTED,
  payload,
});

export const opponentStatus = (payload: boolean): OpponentStatus => ({
  type: GameActions.OPPONENT_STATUS,
  payload,
});

export const nextMove = (payload: Move): NextMove => ({
  type: GameActions.NEXT_MOVE,
  payload,
});
