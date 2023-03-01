import "./css/playComp.css";
import words from "./db/words.json";

function PlayComp({ difficulty, setDifficulty, setGame, setWord, setHint }) {
  const startGame = (e) => {
    e.preventDefault();
    generateWord();
    setGame(true);
  };

  const generateWord = () => {
    const wordsByLvl = words.filter((val) => val.diff === difficulty); //Load words by category
    const ids = wordsByLvl.map((item) => item.id); // Load ids
    const id = ids[Math.floor(Math.random() * wordsByLvl.length - 1)]; // generate random id
    const wordObj = wordsByLvl.find((key) => key.id === id); // find word object with id
    const word_str = wordObj.word.trim().toUpperCase();
    const wordArr = [...word_str].map((char) => [char, false]); //set array of chars
    setWord(wordArr); //update word
    setHint("The word in " + wordObj.cat + " category"); //update hint
  };

  return (
    <div className="playComp">
      <div className="playComp__inner">
        <h2>Choose difficulty</h2>
        <ul className="diff">
          <li
            className={difficulty === "Easy" ? "picked" : ""}
            id="Easy"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            Easy
          </li>
          <li
            className={difficulty === "Normal" ? "picked" : ""}
            id="Normal"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            Normal
          </li>
          <li
            className={difficulty === "Hard" ? "picked" : ""}
            id="Hard"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            Hard
          </li>
        </ul>
        <form className="submit-form" onSubmit={(e) => startGame(e)}>
          <button type="submit" className="btn-start">
            Start!
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlayComp;
