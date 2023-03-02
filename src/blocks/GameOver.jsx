import "../css/gameOver.css";

function GameOver({ lang, fails, word, setGameMode, gameMode, setGame }) {
  const endGame = (e) => {
    e.preventDefault();
    setGame(false);
    setGameMode("");
  };
  const gameOverStr = () => {
    if (lang === "en") {
      return (
        (gameMode === "comp" ? "You " : "Player two ") +
        (fails >= 6 ? "lost :(" : "won!!")
      );
    } else {
      return (
        (gameMode === "comp" ? "Ты " : "Игрок 2 ") +
        (fails >= 6 ? "проиграл :(" : "выиграл!!")
      );
    }
  };
  return (
    <section className="gameOver">
      <div className="gameOver__inner">
        <h1>{gameOverStr()}</h1>
        <p>
          {" "}
          {lang === "en" ? "The word was: " : "Загаданное слово: "}
          {word.map((key) => key[0])}
        </p>
        <form className="gameOver__window" onSubmit={(e) => endGame(e)}>
          <button type="submit" className="btn-start">
            {lang === "en" ? "Okay " : "Окей"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default GameOver;
