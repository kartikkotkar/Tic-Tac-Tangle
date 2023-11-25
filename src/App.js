import './App.css';
import React, { useState } from 'react';

function App() {
  const [player, setPlayer] = useState(1)
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  })

  const play = (boxNo) =>{
    if(player===1){
      setBoard({...board, [boxNo]: "🐼"})
    }
    else{
      setBoard({...board, [boxNo]: "👻"})
    }

    setPlayer(player===1 ? 2 : 1)
  }



  return (
    <div >
      <h1 className='text-center'>Tic Tac Toe</h1>

      <div className='player-container'>
        <span className='player-title'>
          player 1; 🐼
        </span>

        <span className='player-title'>
          player 2; 👻
        </span>
      </div>
      <p className='text-center current-player-text'>
        Current Player: {player === 1 ? " 🐼" : "👻"}
      </p>

      <div className='board'>
        <div className='row'>
          <div className='box' onClick={()=>{play(1)}}>
            {board[1]}
          </div>
          <div className='box'  onClick={()=>{play(2)}}>
            {board[2]}
          </div>
          <div className='box'  onClick={()=>{play(3)}}>
            {board[3]}
          </div>
        </div>

        <div className='row'>
          <div className='box'  onClick={()=>{play(4)}}>
            {board[4]}
          </div>
          <div className='box'  onClick={()=>{play(5)}}>
            {board[5]}
          </div>
          <div className='box'  onClick={()=>{play(6)}}>
            {board[6]}
          </div>
        </div>

        <div className='row'>
          <div className='box'  onClick={()=>{play(7)}}>
            {board[7]}
          </div>
          <div className='box'  onClick={()=>{play(8)}}>
            {board[8]}
          </div>
          <div className='box'  onClick={()=>{play(9)}}>
            {board[9]}
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
