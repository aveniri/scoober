import React from "react";
import styles from "./Circle.module.css";

interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Circle: React.FC<Props> = ({ className = "", onClick, children }: Props) => {
  const classNames = [styles.circle, className].join(" ");
  return (
    <div className={classNames} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};

export default Circle;
