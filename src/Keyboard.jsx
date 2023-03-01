import React, { useState } from "react";
import { useEffect } from "react";
import "./css/keyboard.css";

function Keyboard({ keys, setKeys, setFails, word, setWord, setHintPressed }) {
  const letr = Object.keys(keys);

  const checkForLetter = (letter) => {
    return word.find((key) => key[0] === letter);
  };

  const openLetter = (letter) => {
    const wordObj = word.map(([char, bool]) => {
      if (char === letter) {
        return [char, true];
      }
      return [char, bool];
    });
    setWord(wordObj);
  };

  const handleKeyPick = (e) => {
    setHintPressed(false);
    const gameKeys = { ...keys };
    const key = e.target.id;
    gameKeys[key] = false;
    setKeys(gameKeys);
    if (checkForLetter(key)) {
      openLetter(key);
    } else {
      setFails((prev) => prev + 1);
    }
  };

  return (
    <div className="keyboard__inner">
      {letr.map((item) => (
        <p
          key={item}
          id={item}
          className={keys[item] === true ? "key" : "key picked"}
          onClick={(e) => keys[item] === true && handleKeyPick(e)}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
