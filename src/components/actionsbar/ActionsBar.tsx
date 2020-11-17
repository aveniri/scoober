import React from "react";
import Circle from "../common/circle/Circle";
import styles from "./ActionsBar.module.css";

interface Props {
  onClick: (action: number) => void;
}

const ActionsBar: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div className={styles.actionsBar}>
      <Circle className={styles.actionButton} onClick={() => onClick(-1)}>
        -1
      </Circle>
      <Circle className={styles.actionButton} onClick={() => onClick(0)}>
        0
      </Circle>
      <Circle className={styles.actionButton} onClick={() => onClick(1)}>
        1
      </Circle>
    </div>
  );
};

export default ActionsBar;
