import React from "react";
import styles from "./GameStatus.module.css";
import Button from "../common/button/Button";
import { GameStatuses } from "../../store/game/GameTypes";
import wonImg from "../../assets/images/won.png";
import lostImg from "../../assets/images/lost.png";

interface Props {
  onStart: () => void;
  opponentOnline: boolean;
  status: GameStatuses;
}
const GameStatus: React.FC<Props> = ({ onStart, status, opponentOnline }: Props) => {
  const title = status === GameStatuses.ENTRY ? "Welcome" : GameStatuses.WON ? "You Won" : "You Lost";
  const buttonLabel = status === GameStatuses.ENTRY ? "Start" : "New Game";

  return (
    <div className={styles.gameStart}>
      {status === GameStatuses.WON && <img src={wonImg} alt="Won" />}
      {status === GameStatuses.LOST && <img src={lostImg} alt="Lost" />}
      <h1>{title}</h1>
      {!opponentOnline && <h4>None is online, play against computer</h4>}
      <Button onClick={onStart}>{buttonLabel}</Button>
    </div>
  );
};

export default GameStatus;
