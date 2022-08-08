import React, { useState, useEffect } from "react";
import Header from "./header";
import rockImage from "./images/rock.jpg";
import paperImage from "./images/paper.jpg";
import scissorsImage from "./images/scissors.jpg";

// RockPaperScissors component
const RockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  let [playerChoice, setPlayerChoice] = useState("");
  let [computerChoice, setComputerChoice] = useState("");
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  let [playerImage, setPlayerImage] = useState(rockImage);
  let [computerImage, setComputerImage] = useState(rockImage);

  let [result, setResult] = useState("");

  // create a value which will re-render every time the user makes a choice
  let [value, setValue] = useState(0);

  // sets the appropriate image for the player's and computer's choice
  const setImage = (computerChoice, playerChoice) => {
    if (computerChoice === "rock") {
      setComputerImage(rockImage);
    }
    if (computerChoice === "paper") {
      setComputerImage(paperImage);
    }
    if (computerChoice === "scissors") {
      setComputerImage(scissorsImage);
    }
    if (playerChoice === "rock") {
      setPlayerImage(rockImage);
    }
    if (playerChoice === "paper") {
      setPlayerImage(paperImage);
    }
    if (playerChoice === "scissors") {
      setPlayerImage(scissorsImage);
    }
  };

  // compare the player's and computer's choice and set the result
  // happens every time 'value' changes, when the player selects rock, paper, or scissors
  useEffect(() => {
    setImage(computerChoice, playerChoice);
    {
      switch (playerChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          console.log(playerChoice + computerChoice);
          setResult("You win!");
          setPlayerScore(playerScore + 1);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          console.log(playerChoice + computerChoice);
          setComputerScore(computerScore + 1);
          setResult("You lose!");
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          console.log(playerChoice + computerChoice);

          setResult("Draw!");
          break;
      }
    }
  }, [value]);

  // function for when the player clicks a button
  const handleClick = (e) => {
    setPlayerChoice(e.target.id);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setValue(value + 1);
  };

  return (
    <section>
      <Header text={"Rock, Paper, Scissors game"} />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={playerImage} alt="" className="rounded mx-auto d-block" />
          </div>
          <div className="col-6">
            <img
              src={computerImage}
              alt=""
              className="rounded mx-auto d-block"
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <p>Player has chosen {playerChoice}!</p>
          </div>
          <div className="col-6 ">
            <p>Computer has chosen {computerChoice}!</p>
          </div>
        </div>
        <div className="row">
          <div className="row text-center">
            <div className="col-6">
              <p>Player score: {playerScore}</p>
            </div>
            <div className="col-6 ">
              <p>Computer score: {computerScore}</p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 ">
            <p>{result}</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12">
            <button
              className="btn btn-primary btn-rounded m-3"
              onClick={(e) => handleClick(e)}
              id="rock"
            >
              Rock
            </button>
            <button
              className="btn btn-primary btn-rounded m-3 "
              onClick={(e) => handleClick(e)}
              id="paper"
            >
              Paper
            </button>
            <button
              className="btn btn-primary btn-rounded m-3"
              onClick={(e) => handleClick(e)}
              id="scissors"
            >
              Scissors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RockPaperScissors;
