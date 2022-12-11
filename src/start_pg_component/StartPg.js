import { useEffect, useState } from "react";
import  './startPg.css';
import {Link} from 'react-router-dom'
function StartPg() {
  
    const [player1_name, setPlayer1] = useState('');
    const [player2_name, setPlayer2] = useState('');

    useEffect(()=>{
      localStorage.setItem("player1_name", JSON.stringify(player1_name));
      localStorage.setItem("player2_name", JSON.stringify(player2_name));
      
    })
  
  
  function isValidate(){
    return player1_name && player2_name;
  }
  
    return (
      <div className="containers">
       
        <div className="name_container">
        <h1>Tic Tac Toe Game </h1>
        <input type={"text"} id={"player1"} placeholder={"   Player1 Name"} value={player1_name} onChange={(e)=>setPlayer1(e.target.value)}></input><br/><br/>
        <input type={"text"} id={"player2"} placeholder={"  Player2 Name"} value={player2_name} onChange={(e)=>setPlayer2(e.target.value)}></input><br/><br/>
        <h3>To start game 👇👇</h3>
        <button id="start_btn">{isValidate() ? <Link to = "/game">Start Game</Link>: "Write Above Player's Name"}</button>

      </div>
      </div>
    );
  }
  
  export default StartPg;