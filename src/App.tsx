import './App.css';
import React, { useState } from 'react';
import { Result } from './interfaces/result';
import { ShowCPS } from './components/showCPS';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

let RESULTS:Result[] = [];

function App(): JSX.Element {
  const [cpsRevealed, reveal] = useState(false);
  const [results, setResults] = useState(-1);
  const [leaderboard, setLeaderboard] = useState<Result[]>(RESULTS);

  return (
    <div className="App">
      <ControlPanel 
        results={results}
        setResults={setResults}
        reveal={reveal}
        leaderboard={leaderboard}
        setLeaderboard={setLeaderboard}
      ></ControlPanel>
      <ShowCPS result={leaderboard[results]} cpsRevealed={cpsRevealed}></ShowCPS>
    </div>
  );
}

export default App;
