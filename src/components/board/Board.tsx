import React, { useEffect, useRef } from "react";
import styles from "./Board.module.css";
import { Move } from "../../store/game/GameTypes";
import BoardItem from "./BoardItem";

interface Props {
  moves: Array<Move>;
}
const Board: React.FC<Props> = ({ moves }: Props) => {
  const renderMessages = moves.map((move, index) => <BoardItem key={index} move={move} />);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    if (messagesEndRef && messagesEndRef.current && messagesEndRef.current.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [moves]);

  return (
    <div className={styles.Board}>
      {renderMessages}
      <div className={styles.scrollIntoViewDiv} ref={messagesEndRef}>
        &nbsp;
      </div>
    </div>
  );
};

export default Board;
