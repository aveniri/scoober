import React from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className = "", onClick, children }: Props) => {
  const classNames = [styles.button, className].join(" ");
  return (
    <div className={classNames} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};

export default Button;
