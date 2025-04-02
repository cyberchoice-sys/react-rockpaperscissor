import React from 'react';

const Box = (props) => {
  console.log("props",props);
  
  // let result;
  // if(
  //   props.title == "Computer" &&
  //   props.result !== "Tie" &&
  //   props.result !== ""
  // ) {
  //   result = props.result === "win"? "lose" : "win" ;
  // } else {
  //   result = props.result;
  // }

  return (    
    <div className="box" style={props.style}>
      <h1>{props.title}</h1>
      <img className="item-img"  alt="gamebox" src={props.item && props.item.img} />
      <h2>{props.result}</h2>     
    </div>
  );
};
export default Box;
