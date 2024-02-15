import React, { useState } from 'react';
import './Robot.css'; 

const Robot = ({ size }) => {
 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('north'); 

  const moveRobot = () => {
   
    const movements = {
      north: { x: 0, y: -1 },
      west: { x: 1, y: 0 },
      south: { x: 0, y: 1 },
      east: { x: -1, y: 0 }
    };

   
    const newPosition = {
      x: position.x + movements[direction].x,
      y: position.y + movements[direction].y
    };

    
    if (
      newPosition.x >= 0 &&
      newPosition.x < size &&
      newPosition.y >= 0 &&
      newPosition.y < size
    ) {
      setPosition(newPosition);
    }
  };

  
  const rotateRobot = (directionChange) => {
    const directions = ['north', 'west', 'south', 'east'];
    const currentDirectionIndex = directions.indexOf(direction);
    const newDirectionIndex = (currentDirectionIndex + directionChange + 4) % 4; 


    setDirection(directions[newDirectionIndex]);
  };

  const renderCells = () => {
    const cells = [];
   
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
       
        const cellKey = `${row}-${col}`;
       
        cells.push(<div key={cellKey} className="cell"></div>);
      }
    }
    return cells;
  };
console.log(direction,"direction")
  return (
    <>
      <div className="controls">
        <button onClick={moveRobot}>Move</button>
        <button onClick={() => rotateRobot(-1)}>Left</button>
        <button onClick={() => rotateRobot(1)}> Right</button>

      </div>
    <div className="robot" style={{ left: `${position.x * 70}px`, top: `${position.y * 70}px` }}>
      
      <img  alt="Robot Icon"  src={require("./images/robot-icon.png")} style={{width:"40px"}}/>
     
      </div>

     

      <div className="tabletop">

      {renderCells()}
      
      </div>
      <div style={{color:"blue",marginLeft:"3%",fontSize:"19px"}}>Direction:{direction}</div>
      </>
  );
}

export default Robot;
