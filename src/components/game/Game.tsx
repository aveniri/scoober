import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/Store";
import { nextMove, wonGame } from "../../store/game/GameActions";
import { Players } from "../../store/game/GameTypes";
import Board from "../board/Board";
import ActionsBar from "../actionsbar/ActionsBar";
import styles from "./Game.module.css";

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { moves } = useSelector((state: RootStore) => state.game);

  const calculate = (input: number, remainder: number): number => {
    return Math.round((input + remainder) / 3);
  };

  const onClick = (input: number) => {
    const { result: remainder } = moves.slice(-1)[0] || {};
    const result = calculate(input, remainder);
    if (result <= 1) {
      dispatch(wonGame());
    } else {
      dispatch(nextMove({ input: input, result, remainder, player: Players.ME }));
    }
  };

  return (
    <section className={styles.Game}>
      <Board moves={moves} />
      <ActionsBar onClick={(input) => onClick(input)} />
    </section>
  );
};

export default Game;
