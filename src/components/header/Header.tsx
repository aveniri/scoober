import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <h2 className={styles.title}>Scoober team</h2>
      <span>Win the game or win the job</span>
    </div>
  );
};

export default Header;
