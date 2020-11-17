import React from "react";
import { Move, Players } from "../../store/game/GameTypes";
import styles from "./BoardItem.module.css";

interface Props {
  move: Move;
}
const BoardItem: React.FC<Props> = ({ move }: Props) => {
  const { input: input, remainder, result, player } = move;
  const operator = input > 0 ? "+" : "";
  const formula = `[ ( ${operator}${input} + ${remainder} ) / 3 ] = ${result}`;
  const alignmentStyle = player === Players.ME ? styles.leftAlignment : styles.rightAlignment;
  return (
    <div className={alignmentStyle + " " + styles.boardItem}>
      <div>
        <pre>{formula}</pre>
      </div>
      <span>{result}</span>
    </div>
  );
};

export default BoardItem;
