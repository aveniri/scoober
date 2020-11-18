import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Scoober team</div>
      <span>Win the game or win the job</span>
    </div>
  );
};

export default Header;
