import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/Store";
import { nextMove } from "./store/game/GameActions";
import { Players } from "./store/game/GameTypes";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import ActionsBar from "./components/actionsbar/ActionsBar";
import styles from "./App.module.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { moves } = useSelector((state: RootStore) => state.game);

  const calculate = (input: number, remainder: number): number => {
    return Math.round((input + remainder) / 3);
  };

  const onClick = (input: number) => {
    const { result: remainder } = moves.slice(-1)[0] || {};
    const result = calculate(input, remainder);
    dispatch(nextMove({ input, result, remainder, player: Players.ME }));
  };

  return (
    <main className={styles.app}>
      <Header />
      <Board moves={moves} />
      <ActionsBar onClick={(input) => onClick(input)} />
    </main>
  );
};

export default App;
