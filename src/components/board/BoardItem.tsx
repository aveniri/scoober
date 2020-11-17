import React from "react";
import { Move, Players } from "../../store/game/GameTypes";
import Circle from "../common/circle/Circle";
import styles from "./BoardItem.module.css";

interface Props {
  move: Move;
}
const BoardItem: React.FC<Props> = ({ move }: Props) => {
  const { input, remainder, result, player } = move;
  const operator = input > 0 ? "+" : "";
  const inputString = `${operator}${input}`;
  const formula = `[ ( ${inputString} + ${remainder} ) / 3 ] = ${result}`;
  const alignmentStyle = player !== Players.ME ? styles.rightAlignment : "";
  return (
    <div className={alignmentStyle + " " + styles.boardItem}>
      <div className={styles.player}>
        <Circle className={styles.playerCircle}>ME</Circle>
      </div>
      <div className={styles.content}>
        <Circle className={styles.inputCircle}>{inputString}</Circle>
        <div className={styles.operation}>{formula}</div>
        <div className={styles.operation}>{result}</div>
      </div>
    </div>
  );
};

export default BoardItem;
