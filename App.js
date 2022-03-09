import React, { useEffect, useState } from 'react';
import './App.css';
import SqComponent from "./sqrcomp";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [game, updateGame] = useState(clearState)
  const [isXChance, updateIsXChance] = useState(false)

  const onUserClicked = (index) => {
    let strings = Array.from(game);
    if (strings[index])
      return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance)
    updateGame(strings)
  }

  const clearGame = () => {
    updateGame(clearState)
  }
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`${winner} is the hero !`)
    }
   
  }, [game])

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
    
    console.log('Class: App, Function: checkWinner ==', game[0], game[1], game[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  }


  return (
    <div className="app-header">
      <p className="heading"> Tic Tac Toe </p>



      <div className="row">
        <SqComponent className="bottom-right" onClick={() => onUserClicked(0)} state={game[0]} />
        <SqComponent className="bottom-right" onClick={() => onUserClicked(1)} state={game[1]} />
        <SqComponent className="bottom"       onClick={() => onUserClicked(2)} state={game[2]} />
      </div>
      <div className="row">
     
        <SqComponent className="bottom-right" onClick={() => onUserClicked(3)} state={game[3]} />
        <SqComponent className="bottom-right" onClick={() => onUserClicked(4)} state={game[4]} />
        <SqComponent className="bottom"       onClick={() => onUserClicked(5)} state={game[5]} />
      </div>
      <div className="row">

        <SqComponent className="b-right" onClick={() => onUserClicked(6)} state={game[6]} />
        <SqComponent className="b-right" onClick={() => onUserClicked(7)} state={game[7]} />
        <SqComponent                     onClick={() => onUserClicked(8)} state={game[8]} />
      </div>



      <button className="refresh-button" onClick={clearGame}>RESTART</button>

    </div>
  );
}

export default App;
