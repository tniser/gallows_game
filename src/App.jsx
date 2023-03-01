import { useState, useEffect } from "react";
import MainMenu from "./MainMenu";
import Game from "./Game";
import "./css/mainMenu.css";
import keys_default from "./db/keys";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [game, setGame] = useState(false);
  const [difficulty, setDifficulty] = useState("Normal");
  const [word, setWord] = useState([]);
  const [hint, setHint] = useState("");
  const [keys, setKeys] = useState({});
  useEffect(() => {
    setKeys(keys_default);
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
        />
      ) : (
        <Game
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
