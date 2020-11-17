import { GameActions, GameStatus, GameStatuses, Move, NextMove } from "./GameTypes";

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
