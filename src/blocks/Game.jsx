import { useState } from "react";
import "../db/words.json";
import "../css/game.css";
import Word from "./Word";
import Keyboard from "./Keyboard";
import Canvas from "./Canvas";
import GameOver from "./GameOver";

function Game({
  lang,
  setGameMode,
  gameMode,
  setGame,
  hint,
  word,
  setWord,
  keys,
  setKeys,
}) {
  const [fails, setFails] = useState(0);
  const [hintPressed, setHintPressed] = useState(true);
  return (
    <div className="game">
      <Canvas
        fails={fails}
        hint={hint}
        setHintPressed={setHintPressed}
        hintPressed={hintPressed}
      />
      <Word word={word} />
      <Keyboard
        fails={fails}
        setFails={setFails}
        keys={keys}
        setKeys={setKeys}
        word={word}
        setWord={setWord}
        setHintPressed={setHintPressed}
      />

      {(fails >= 6 || word.every((key) => key[1] === true)) && (
        <GameOver
          lang={lang}
          fails={fails}
          gameMode={gameMode}
          setGame={setGame}
          word={word}
          setGameMode={setGameMode}
        />
      )}
    </div>
  );
}

export default Game;
