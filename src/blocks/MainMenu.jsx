import React from "react";
import PlayComp from "./PlayComp";
import TwoPlayer from "./TwoPlayer";

function MainMenu({
  gameMode,
  setGameMode,
  difficulty,
  setDifficulty,
  setGame,
  setHint,
  setWord,
}) {
  return (
    <div className="mainMenu">
      <section onClick={() => setGameMode("")} className="hero">
        <div className="sun"></div>
        <div className="hero__picture">
          <h1 className="mainTitle">The Gallows Game!</h1>
          <div className="line top"></div>
          <div className="line rope"></div>
          <div className="line diag"></div>
          <div className="line vertical"></div>
          <div className="line bottom"></div>
        </div>
      </section>
      <form className="btns" onSubmit={(e) => e.preventDefault()}>
        <button className="mainMenu__btn" onClick={() => setGameMode("comp")}>
          Play with computer
        </button>
        <button
          className="mainMenu__btn"
          onClick={() => setGameMode("twoPlayer")}
        >
          Two players game
        </button>
      </form>

      {gameMode === "comp" && (
        <PlayComp
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setGame={setGame}
          setWord={setWord}
          setHint={setHint}
        />
      )}
      {gameMode === "twoPlayer" && (
        <TwoPlayer setWord={setWord} setHint={setHint} setGame={setGame} />
      )}
    </div>
  );
}

export default MainMenu;
