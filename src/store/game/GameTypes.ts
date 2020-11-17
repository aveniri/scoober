import { Action } from "redux";

export enum GameActions {
  ENTER = "game/enter",
  START = "game/start",
  OVER = "game/over",
  NEXT_MOVE = "game/next_move",
}

export enum GameStatuses {
  ENTRY,
  PROGRESS,
  WON,
  LOST,
}

export enum Players {
  ME = "me",
  THEM = "them",
}

export interface Move {
  input: number;
  remainder: number;
  result: number;
  player: Players;
}

export interface GameState {
  moves: Array<Move>;
  status: GameStatuses;
}

export interface GameStatus extends Action {
  type: GameActions;
  payload: GameStatuses;
}

export interface NextMove extends Action {
  type: typeof GameActions.NEXT_MOVE;
  payload: Move;
}

export type GameDispatchTypes = GameStatus | NextMove;
