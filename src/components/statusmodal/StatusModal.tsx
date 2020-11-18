import React from "react";
import styles from "./StatusModal.module.css";
import Button from "../common/button/Button";
import { GameStatus } from "../../store/game/GameTypes";
import wonImg from "../../assets/images/won.png";
import lostImg from "../../assets/images/lost.png";

interface Props {
  onStart: () => void;
  opponentOnline: boolean;
  status: GameStatus;
}
const StatusModal: React.FC<Props> = ({ onStart, status, opponentOnline }: Props) => {
  const title = status === GameStatus.ENTRY ? "Welcome" : status === GameStatus.WON ? "You Won" : "You Lost";
  const buttonLabel = status === GameStatus.ENTRY ? "Start" : "New Game";

  return (
    <div className={styles.statusModal}>
      {status === GameStatus.WON && <img src={wonImg} alt="Won" />}
      {status === GameStatus.LOST && <img src={lostImg} alt="Lost" />}
      <h1>{title}</h1>
      {!opponentOnline && <h4>None is online, play against computer</h4>}
      <Button onClick={onStart}>{buttonLabel}</Button>
    </div>
  );
};

export default StatusModal;
