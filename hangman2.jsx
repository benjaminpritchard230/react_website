import React, { useState } from "react";

const HangmanGame = () => {
  const word = "computer".toUpperCase();

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let [guessedLetters, setGuessedLetters] = useState([]);
  const maskedWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div>
      <div>{maskedWord}</div>
      <div>
        {alphabets.map((alphabet, index) => (
          <button
            key={index}
            onClick={() => {
              if (word.includes(alphabet)) {
                setGuessedLetters([...guessedLetters, alphabet]);
              }
            }}
          >
            {alphabet}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HangmanGame;
