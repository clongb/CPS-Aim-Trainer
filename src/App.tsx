import './App.css';
import React, { useState } from 'react';
import { Result } from './interfaces/result';
import { Score } from './interfaces/score';
import { ShowCPS } from './components/showCPS';
import { ControlPanel } from './components/ControlPanel';
import { ResultsModal } from './components/ResultsModal';
import { PrintLeaderboard } from './components/PrintLeaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';

let RESULTS:Result[] = [];
let SCORES:Score[] = [];

function App(): JSX.Element {
  const [cpsRevealed, reveal] = useState(false);
  const [results, setResults] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [scoreList, setScoreList] = useState<Result[]>(RESULTS);
  const [leaderboard, setLeaderboard] = useState<Score[]>(SCORES);

  function addScore(newScore: Score) {
    setLeaderboard([...leaderboard, newScore]);
  }

  return (
    <div className="App">
      <h1>Clicks Per Second</h1>
      <h4>Click as fast as you can before time runs out!</h4>
      <ControlPanel 
        results={results}
        setResults={setResults}
        reveal={reveal}
        leaderboard={scoreList}
        setLeaderboard={setScoreList}
        setHasResults={setHasResults}
        setVisible={setVisible}
      ></ControlPanel>
      <PrintLeaderboard sortedLb={leaderboard} hasResults={hasResults}></PrintLeaderboard>
      <ShowCPS result={scoreList[results]} cpsRevealed={cpsRevealed}></ShowCPS>
      <ResultsModal result={scoreList[results]} visible={visible} setVisible={setVisible}
          addScore={addScore}></ResultsModal>
    </div>
  );
}

export default App;
