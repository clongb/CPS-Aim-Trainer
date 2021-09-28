import './App.css';
import React, { useState, useEffect } from 'react';
import { Result } from './interfaces/result';
import { ShowCPS } from './components/showCPS';

let RESULTS:Result[] = [];

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(15);
  const [results, setResults] = useState(-1);
  const [cps, setCPS] = useState<Result>(RESULTS[0] as Result);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [cpsRevealed, reveal] = useState(false);
  const [leaderboard, setLeaderboard] = useState<Result[]>(RESULTS);

  function addResult(newResult: Result) {
    setLeaderboard([...leaderboard, newResult]);
  }

  const handleStart = () => {
    setCount(0);
    setIsDisabled(false);
    setIsActive(true);
    reveal(false);
    const increment = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }

  const handleStop = () => {
    addResult({time: 15 , clicks: count});
    setResults(results + 1);
    setCPS(leaderboard[results]);
    setIsDisabled(true);
    setIsActive(false);
    reveal(true);
    setTimer(0);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`
    if(timer <= 0){
      return () => handleStop();
    }
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
      <ShowCPS result={leaderboard[results]} cpsRevealed={cpsRevealed}></ShowCPS>
    </div>
  );
}

export default App;
