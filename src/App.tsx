import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/Store";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import ActionsBar from "./components/actionsbar/ActionsBar";
import styles from "./App.module.css";
import { socket, initSockets, SocketEvents } from "./services/SocketService";
import { GameStatus, Players } from "./store/game/GameTypes";
import StatusModal from "./components/statusmodal/StatusModal";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initSockets(dispatch);
    return (): void => {
      socket.disconnect();
    };
  }, [initSockets]);

  const { moves, status, playerTurn, opponentOnline } = useSelector((state: RootStore) => state.game);

  const onClick = (input: number) => {
    socket.emit(SocketEvents.NEXT_MOVE, { input });
  };

  const onStart = () => {
    socket.emit(SocketEvents.NEXT_MOVE, { input: 0, firstMove: true });
  };

  return (
    <main className={styles.app}>
      <Header />
      {status !== GameStatus.PLAYING && (
        <StatusModal onStart={onStart} status={status} opponentOnline={opponentOnline} />
      )}

      <Board moves={moves} />
      <ActionsBar onClick={(input) => onClick(input)} disabled={playerTurn === Players.OPPONENT} />
    </main>
  );
};

export default App;
