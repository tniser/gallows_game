import "../css/playComp.css";
import words from "../db/words.json";
import words_ru from "../db/words_ru.json";

function PlayComp({
  lang,
  difficulty,
  setDifficulty,
  setGame,
  setWord,
  setHint,
}) {
  const startGame = (e) => {
    e.preventDefault();
    generateWord();
    setGame(true);
  };

  const generateWord = () => {
    const wordsByLvl = (lang === "en" ? words : words_ru).filter(
      (val) => val.diff === difficulty
    ); //Load words by category
    const ids = wordsByLvl.map((item) => item.id); // Load ids
    const id = ids[Math.floor(Math.random() * wordsByLvl.length - 1)]; // generate random id
    const wordObj = wordsByLvl.find((key) => key.id === id); // find word object with id
    const word_str = wordObj.word.trim().toUpperCase();
    const wordArr = [...word_str].map((char) => [char, false]); //set array of chars
    setWord(wordArr); //update word
    lang === "en"
      ? setHint("The word in " + wordObj.cat + " category")
      : setHint("Слово в категории " + wordObj.cat); //update hint
  };

  return (
    <div className="playComp">
      <div className="playComp__inner">
        <h2>{lang === "en" ? "Choose difficulty" : "Выберите сложность"}</h2>
        <ul className="diff">
          <li
            className={difficulty === "Easy" ? "picked" : ""}
            id="Easy"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            {lang === "en" ? "Easy" : "Легко"}
          </li>
          <li
            className={difficulty === "Normal" ? "picked" : ""}
            id="Normal"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            {lang === "en" ? "Normal" : "Нормально"}
          </li>
          <li
            className={difficulty === "Hard" ? "picked" : ""}
            id="Hard"
            onClick={(e) => setDifficulty(e.target.id)}
          >
            {lang === "en" ? "Hard" : "Сложно"}
          </li>
        </ul>
        <form className="submit-form" onSubmit={(e) => startGame(e)}>
          <button type="submit" className="btn-start">
            {lang === "en" ? "Start!" : "Начать"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlayComp;
