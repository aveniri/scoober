import React from "react";
import Game from "./components/game/Game";
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Game />
    </>
  );
};

export default App;
