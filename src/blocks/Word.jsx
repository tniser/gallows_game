import React from "react";
import "../css/word.css";

function Word({ word }) {
  return (
    <section className="word">
      <div className="word__inner">
        {word.map((char) => (
          <div className="letter" key={word.indexOf(char)}>
            {char[1] === true ? char[0] : "_"}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Word;
