import "./DisplayGame.css";
import React, { useState, useEffect } from "react";
import Square from "./Square";
import claps from "../images/claps-sound.mp3";
import winnerGif from "../images/winnerGif1.gif";
const clearState = ["", "", "", "", "", "", "", "", "", ""];
function DisplayGame() {
  const [P1, setP1] = useState(localStorage.getItem("player1_name"));
  const [P2, setP2] = useState(localStorage.getItem("player2_name"));
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const[gameOver, setGameOver] = useState(false);

  function play() {
    setGameWon(true);
    setGameOver(true)
    new Audio(claps).play();
    setTimeout(() => {
      setGameWon(false)
    }, 6000);
  }
  let winner ="";
  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index] ||gameOver ) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
    document.getElementById("text").innerHTML = "";
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  }; // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
   winner = checkWinner();
    if (winner) {
      play();

     
    }
  }, [gameState]);
  
  return (
    <div>
      {gameWon ? (
        
          <div className={"containerWon"}>
            <h3 id="text">{` Congratulation 🥇 ${
        winner == "X"
          ? localStorage.getItem("player1_name")
          : localStorage.getItem("player2_name")
          
      } won the game!!!`}</h3>
          </div>
        
      ) : (
        
        <div className="container">
          <h1 className="welcome" style={{ color: "black" }}>
            {" "}
            Welcome {P1} And {P2}🌻🌻 <br />
          </h1>

          <h1 id="XO" style={{ color: "blue" }}>
            This is{" "}
            <span id="chance">
              {isXChance
                ? localStorage.getItem("player1_name")
                : localStorage.getItem("player2_name")}
            </span>{" "}
            Chance! 😇{" "}
          </h1>
          <div className="box">
            <div className="row jc-center">
              <Square
                className="b-top"
                onClick={() => onUserClicked(0)}
                state={gameState[0]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(1)}
                state={gameState[1]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(2)}
                state={gameState[2]}
              />
            </div>
            <div className="row jc-center">
              <Square
                className="b-top"
                onClick={() => onUserClicked(3)}
                state={gameState[3]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(4)}
                state={gameState[4]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(5)}
                state={gameState[5]}
              />
            </div>
            <div className="row jc-center">
              <Square
                className="b-top"
                onClick={() => onUserClicked(6)}
                state={gameState[6]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(7)}
                state={gameState[7]}
              />
              <Square
                className="b-top"
                onClick={() => onUserClicked(8)}
                state={gameState[8]}
              />
            </div>
          </div>
          <br />
          <button id="restart_btn" onClick={clearGame}>
            ReStart 👍{" "}
          </button>
          <br />
          
        </div>
        
      )}
    </div>
  );
}

export default DisplayGame;
