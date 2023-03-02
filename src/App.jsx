import { useState, useEffect } from "react";
import MainMenu from "./blocks/MainMenu";
import Game from "./blocks/Game";
import "./css/mainMenu.css";
import keys_default from "./db/keys";
import keys_ru from "./db/keys_ru";

function App() {
  const [lang, setLang] = useState("en");
  const [gameMode, setGameMode] = useState("");
  const [game, setGame] = useState(false);
  const [difficulty, setDifficulty] = useState("Normal");
  const [word, setWord] = useState([]);
  const [hint, setHint] = useState("");
  const [keys, setKeys] = useState({});
  useEffect(() => {
    lang === "en" ? setKeys(keys_default) : setKeys(keys_ru);
  }, [game]);
  return (
    <div className="App">
      {!game ? (
        <MainMenu
          gameMode={gameMode}
          setGameMode={setGameMode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setGame={setGame}
          setHint={setHint}
          setWord={setWord}
          lang={lang}
          setLang={setLang}
        />
      ) : (
        <Game
          lang={lang}
          word={word}
          setWord={setWord}
          hint={hint}
          gameMode={gameMode}
          difficulty={difficulty}
          setGame={setGame}
          keys={keys}
          setKeys={setKeys}
          setGameMode={setGameMode}
        />
      )}
    </div>
  );
}

export default App;
