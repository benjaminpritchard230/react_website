import React, { useEffect, useState } from "react";
import Header from "./header";
import zero from "./images/0.jpg";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpg";
import six from "./images/6.jpg";

const Hangman = () => {
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
  let [wrongLetters, setWrongLetters] = useState([]);
  let [gameStatus, setGameStatus] = useState("");
  let [image, setImage] = useState(one);

  const maskedWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  const changeImage = () => {
    switch (wrongLetters.length) {
      case 0:
        setImage(zero);
        break;
      case 1:
        setImage(one);
        break;
      case 2:
        setImage(two);
        break;
      case 3:
        setImage(three);
        break;
      case 4:
        setImage(four);
        break;
      case 5:
        setImage(five);
        break;
      case 6:
        setImage(six);
        break;
    }
  };

  useEffect(() => {
    changeImage();
    if (!maskedWord.includes("_")) {
      setGameStatus("Game over, you win!");
    }
    if (wrongLetters.length >= 6) {
      setGameStatus(
        `Game over, you have run out of guesses! The word was ${word}.`
      );
    }
  }, [guessedLetters, wrongLetters]);

  return (
    <div>
      <Header text="Hangman Game" />
      <div>
        <div className="container">
          <div className="row text-center">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <h3>{maskedWord}</h3>
            </div>
            <div className="col-6">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6">
              <p>{gameStatus}</p>
            </div>
            <div className="col-6">
              <p>Incorrect guesses: {wrongLetters}</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                {alphabets.map((alphabet, index) => (
                  <button
                    key={index}
                    className="btn btn-primary"
                    onClick={(e) => {
                      if (word.includes(alphabet)) {
                        setGuessedLetters([...guessedLetters, alphabet]);
                        e.target.className = "btn btn-success";
                      }
                      if (!word.includes(alphabet)) {
                        setWrongLetters([...wrongLetters, alphabet]);
                        e.target.className = "btn btn-danger";
                        e.target.disabled = true;
                      }
                    }}
                  >
                    {alphabet}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
