import React from "react";
import Circle from "../common/circle/Circle";
import styles from "./ActionsBar.module.css";

interface Props {
  onClick: (action: number) => void;
  disabled: boolean;
}

const ActionsBar: React.FC<Props> = ({ onClick, disabled }: Props) => {
  const disabledStyle = disabled ? styles.disabled : "";
  const onActionClick = (action: number) => {
    if (!disabled) onClick(action);
  };
  return (
    <div className={disabledStyle + " " + styles.actionsBar}>
      <Circle className={styles.actionButton} onClick={() => onActionClick(-1)}>
        -1
      </Circle>
      <Circle className={styles.actionButton} onClick={() => onActionClick(0)}>
        0
      </Circle>
      <Circle className={styles.actionButton} onClick={() => onActionClick(1)}>
        1
      </Circle>
    </div>
  );
};

export default ActionsBar;
