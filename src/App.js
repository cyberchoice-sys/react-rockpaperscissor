import './App.css';
import { useState } from 'react';
import Box from "./components/Box"

const choice = {
  rock:{
    name : "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy3ba0jCVyryr8zNanLW2niF3B1ETwRd4gQ&s",
  },
  scissor:{
    name : "Scissor",
    img: "https://i.pinimg.com/474x/a6/1d/ea/a61dea1843cae2edbf0ec2e71d16d1eb.jpg",
    },
  paper:{
    name : "Paper",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-paper-cartoon-illustration_23-2151358276.jpg",
  },
};

function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect]= useState(null)
  const [Result, setUserResult] = useState("");
  const [ComResult, setComputerResult] = useState("");

  const play=(userChoice)=> {
    // console.log("selected!")
    setUserSelect(choice[userChoice]);
    // when a user select item, computer choose item randomly
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    // Judgement
    setUserResult(userJudgement(choice[userChoice],computerChoice));
    setComputerResult(comJudgement(computerChoice,choice[userChoice]));
  };
  //  Logic for the Game
  //  user == computer  TIE
  //  user == Rock, Computer == Scissors  User Win
  //  user == Rock, Computer == Paper     Com Win
  //  user == Paper, Computer == Scissors Com Win
  //  user == Paper, Computer == Rock     User Win
  //  user == Scissor, Computer == Rock   Com Win
  //  user == Scissor, Computer == Paper  User Win
  // if( user.name === computer.name){
  //   return "tie"
  // }else if (user.name=="Rock"){
  //   return "win"
  // }else {
  //   return "lose"
  // }

  const userJudgement = (user, computer) => {
        console.log("user", user, "computer", computer);
        if(user.name === computer.name){
          return "tie"
        }else if(user.name === "Rock" && computer.name === "Scissor"){
          return  "You Win"
        }else if (user.name === "Scissor" && computer.name ==="Paper"){
          return  "You Win"
        }else if (user.name === "Paper" && computer.name === "Rock"){
          return "You Win"
        } else{
          return "You Lose"
        }
    };

  const comJudgement = (computer,user) => {
    console.log("userResult", Result); 
    if (computer.name === user.name){
          return "tie"
        }else if(computer.name === "Rock" && user.name === "Scissor"){
          return  "Computer Win"
        }else if (computer.name === "Scissor" && user.name ==="Paper"){
          return  "Computer Win"
        }else if (computer.name === "Paper" && user.name === "Rock"){
          return "Computer Win"
        } else{
          return "Computer Lose"
        }
 };

// const Judgement = (user,computer) => {
// if (user.name === computer.name) {
//     return "Tie!";
// } else if (
//   (user.name === "rock" && computer.name === "scissors") ||
//   (user.name=== "paper" && computer.name === "rock") ||
//   (user.name === "scissors" && computer.name === "paper")
// ) {
//   return "You win the round!";

// } else {
//   return "Computer wins the round!";
// }
  
  const randomChoice=()=>{
    // object into array
    let itemArray = Object.keys(choice); // 초이스 객체에 있는 키값만 모아서 Array 만듬
    //console.log("Item Array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    //console.log("random value", randomItem);
    let final = itemArray[randomItem];
    //console.log("final", final);
    return choice[final];
    };

// Function for the border color based on results
const boxBorderColor = (result) => {
  if (result === "You Win" ){
      return "green"; // Winner's border
  } else if (result === "Computer Win") {
      return "green"; // Winner's border
  } else if (result === "You Lose"){
    return "red"; // Loser's border
  } else if (result === "Computer Lose"){
    return "red"; // Loser's border
  } else if (result === "Tie") {
    return "black"; // Tie border
  } else {
    return "blue"; // Default border color
  }
};
 
  return (
    <div>
      <div className="main" >
        <Box style={{ borderColor: boxBorderColor(Result)}} title="You" item={userSelect} result={Result}/>
        <Box style={{ borderColor: boxBorderColor(ComResult) }}title="Computer" item={computerSelect} result={ComResult}/> 
      </div>
      <div className="main">
          <button onClick={() => play("rock")}>Rock</button>
          <button onClick={() => play("paper")}>Paper</button>
          <button onClick={() => play("scissor")}>Scissor</button>
      </div>
    </div>
  );
};

export default App;
