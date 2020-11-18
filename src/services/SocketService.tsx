import { Dispatch } from "redux";
import io from "socket.io-client";
import { SOCKET_ENDPOINT } from "../../configs";
import { connectionStatus, nextMove, opponentStatus } from "../store/game/GameActions";
import { Connection, Move, Players } from "../store/game/GameTypes";

export enum SocketEvents {
  ENTER = "enter",
  CONNECTED = "connected",
  DISCONNECT = "disconnect",
  NEXT_MOVE = "next_move",
  OPPONENT_STATUS = "opponent_status",
  OPPONENT_NEXT_MOVE = "opponent_next_move",
  COMPUTER_NEXT_MOVE = "computer_next_move",
}

export const socket: SocketIOClient.Socket = io(SOCKET_ENDPOINT, { autoConnect: false });

export const initSockets = (dispatch: Dispatch): void => {
  socket.connect();

  socket.on(SocketEvents.CONNECTED, (payload: Connection) => {
    dispatch(connectionStatus(payload));
  });

  socket.on(SocketEvents.OPPONENT_STATUS, (payload: string) => {
    console.log(SocketEvents.OPPONENT_STATUS, payload);
    dispatch(opponentStatus(payload === "online"));
  });

  socket.on(SocketEvents.NEXT_MOVE, (payload: Move) => {
    dispatch(nextMove({ ...payload, player: Players.ME }));
  });

  socket.on(SocketEvents.OPPONENT_NEXT_MOVE, (payload: Move) => {
    dispatch(nextMove({ ...payload, player: Players.OPPONENT }));
  });

  socket.on(SocketEvents.COMPUTER_NEXT_MOVE, (payload: Move) => {
    dispatch(nextMove({ ...payload, player: Players.OPPONENT }));
  });
};

export const socketEmit = (event: string, payload: string | Move): void => {
  socket.emit(event, payload);
};
