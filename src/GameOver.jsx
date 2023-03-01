import "./css/gameOver.css";

function GameOver({ fails, word, setGameMode, gameMode, setGame }) {
  const endGame = (e) => {
    e.preventDefault();
    setGame(false);
    setGameMode("");
  };
  return (
    <div className="gameOver__inner">
      <h1>
        {gameMode === "comp" ? "You" : "Player two"}{" "}
        {fails >= 6 ? "lost :(" : "won!!"}
      </h1>
      <p> The word was: {word.map((key) => key[0])}</p>
      <form className="gameOver__window" onSubmit={(e) => endGame(e)}>
        <button type="submit" className="btn-start">
          Okay
        </button>
      </form>
    </div>
  );
}

export default GameOver;
