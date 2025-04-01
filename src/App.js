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
    img: "https://i.pinimg.com/474x/a6/1d/ea/a61dea1843cae2edbf0ec2e71d16d1eb.jpg"
    },
  paper:{
    name : "Paper",

    img: "https://img.freepik.com/free-vector/hand-drawn-flat-paper-cartoon-illustration_23-2151358276.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null)


  const play=(userChoice)=>{
    // console.log("selected!")
    setUserSelect(choice[userChoice])
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer" item={}/>  */}
      </div>
      <div className="main">
          <button onClick={() => play("rock")}>Rock</button>
          <button onClick={() => play("paper")}>Paper</button>
          <button onClick={() => play("scissor")}>Scissor</button>
      </div>
    </div>
  );
}

export default App;
