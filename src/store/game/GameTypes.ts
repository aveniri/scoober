import { Action } from "redux";

export enum GameActions {
  CONNECTED = "game/connected",
  DISCONNECTED = "game/disconnected",
  OPPONENT_STATUS = "game/opponent_status",
  START = "game/start",
  OVER = "game/over",
  NEXT_MOVE = "game/next_move",
}

export enum GameStatuses {
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
  player?: Players;
  playerId?: number;
}

export interface Connection {
  playerId: number;
  opponentOnline: boolean;
}

export interface GameState extends Connection {
  moves: Array<Move>;
  status: GameStatuses;
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

export interface GameStatus extends Action {
  type: GameActions;
  payload: GameStatuses;
}

export interface NextMove extends Action {
  type: GameActions;
  payload: Move;
}

export type GameDispatchTypes = ConnectionStatus | OpponentStatus | GameStatus | NextMove;
