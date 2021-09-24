import './App.css';
import React, { useState, useEffect } from 'react';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const handleStart = () => {
      setIsDisabled(false);
      setIsActive(true);
      
      const increment = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000);
      if (timer == 15000){
        handleStop(increment);
      } 
      
  }

  const handleStop = (interval: NodeJS.Timer) => {
    clearInterval(interval);
    setIsDisabled(true);
    setIsActive(false);
    setTimer(0);
  }

  useEffect(() => {
      document.title = `You clicked ${count} times`
  });

  return (
    <div className="App">
      <p>{timer}</p>
      <p>You clicked {count} times!</p>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button disabled={isDisabled} onClick={() => setCount(count+1)}>
            Click me
        </button>
      </div>
    </div>
  );
}

export default App;
