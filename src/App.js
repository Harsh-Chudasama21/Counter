import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>
        <div className="counter-display">{counter}</div>
        <div className="button-container">
          <button 
            className="counter-button increment"
            onClick={handleClick1}
          >
            Increase
          </button>
          <button 
            className="counter-button decrement"
            onClick={handleClick2}
            disabled={counter === 0}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



