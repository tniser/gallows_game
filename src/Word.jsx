import React from "react";
import "./css/word.css";

function Word({ word }) {
  return (
    <div className="word__inner">
      {word.map((char) => (
        <div className="letter" key={word.indexOf(char)}>
          {char[1] === true ? char[0] : "_"}
        </div>
      ))}
    </div>
  );
}

export default Word;
