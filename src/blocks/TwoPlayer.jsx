import "../css/twoPlayer.css";

function TwoPlayer({ setWord, setHint, setGame }) {
  const startGame = (e) => {
    e.preventDefault();
    const word_str = document.getElementById("word").value.toUpperCase();
    const wordArr = [...word_str].map((char) => [char, false]);
    setWord(wordArr);
    setHint(document.getElementById("hint").value);
    setGame(true);
  };

  return (
    <div className="twoPlayer">
      <div className="twoPlayer__inner">
        <h2>Player one chooses a word</h2>
        <form onSubmit={(e) => startGame(e)}>
          <input
            className="twoPlayer__input"
            type="text"
            placeholder="Input your word here"
            id="word"
            autoComplete="off"
            required
            pattern=".{2,}"
            maxLength="16"
          ></input>
          <input
            className="twoPlayer__input"
            type="text"
            placeholder="Input your hint here"
            id="hint"
            autoComplete="off"
            required
            maxLength="40"
          ></input>
          <button type="submit" className="btn-start">
            Start!
          </button>
        </form>
      </div>
    </div>
  );
}

export default TwoPlayer;
