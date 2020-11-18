import { Action } from "redux";

export enum GameActions {
  CONNECTED = "game/connected",
  OPPONENT_STATUS = "game/opponent_status",
  NEXT_MOVE = "game/next_move",
}

export enum GameStatus {
  ENTRY,
  PLAYING,
  WON,
  LOST,
}

export enum Players {
  ME,
  OPPONENT,
}

export interface Move {
  input: number;
  remainder: number;
  result: number;
  firstMove?: boolean;
  player?: Players;
  playerId?: number;
}

export interface Connection {
  playerId: number;
  opponentOnline: boolean;
}

export interface GameState extends Connection {
  moves: Array<Move>;
  status: GameStatus;
  playerTurn: Players;
}

export interface ConnectionStatus extends Action {
  type: typeof GameActions.CONNECTED;
  payload: Connection;
}

export interface OpponentStatus extends Action {
  type: typeof GameActions.OPPONENT_STATUS;
  payload: boolean;
}

export interface NextMove extends Action {
  type: GameActions;
  payload: Move;
}

export type GameDispatchTypes = ConnectionStatus | OpponentStatus | NextMove;
