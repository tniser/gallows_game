import React from "react";

import PlayComp from "./PlayComp";
import TwoPlayer from "./TwoPlayer";

function MainMenu({
  setLang,
  lang,
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
      <div
        className={"lang " + lang}
        onClick={(e) => {
          if (localStorage.getItem("lang") === "en") {
            localStorage.setItem("lang", "ru");
            setLang("ru");
          } else {
            localStorage.setItem("lang", "en");
            setLang("en");
          }
        }}
      ></div>
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
          {lang === "en" ? "Play with computer" : "Играть с компьютером"}
        </button>
        <button
          className="mainMenu__btn"
          onClick={() => setGameMode("twoPlayer")}
        >
          {lang === "en" ? "Two players game" : "Играть вдвоем"}
        </button>
      </form>

      {gameMode === "comp" && (
        <PlayComp
          lang={lang}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setGame={setGame}
          setWord={setWord}
          setHint={setHint}
        />
      )}
      {gameMode === "twoPlayer" && (
        <TwoPlayer
          lang={lang}
          setWord={setWord}
          setHint={setHint}
          setGame={setGame}
        />
      )}
    </div>
  );
}

export default MainMenu;
