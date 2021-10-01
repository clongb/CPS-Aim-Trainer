import React, { useState, useEffect } from 'react';
import { Result } from '../interfaces/result';
import { Col, Button } from 'react-bootstrap';

let RESULTS:Result[] = [];

export function ControlPanel({results, setResults, reveal, leaderboard, setLeaderboard, setHasResults, setVisible}: {
    results: number, setResults: (rs: number) => void, reveal: (r: boolean) => void, leaderboard: Result[], 
    setLeaderboard: (l: Result[]) => void, setHasResults: (h: boolean) => void, setVisible: (v: boolean) => void
}): JSX.Element {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(15);
    const [cps, setCPS] = useState<Result>(RESULTS[0] as Result);
    const [isDisabled, setIsDisabled] = useState(true);
    const [disableStart, setStartIsDisabled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    

    function addResult(newResult: Result) {
        setLeaderboard([...leaderboard, newResult]);
    }

    const handleStart = () => {
        setTimer(15);
        setCount(0);
        setStartIsDisabled(true);
        setIsDisabled(false);
        setIsActive(true);
        reveal(false);
        const increment = setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);
        if (isStopped) {
            clearInterval(increment);
        }
        setIsStopped(false);
    }

    const handleStop = () => {
        addResult({ time: 15, clicks: count });
        setResults(results + 1);
        setCPS(leaderboard[results]);
        setStartIsDisabled(false);
        reveal(true);
        setIsDisabled(true);
        setIsActive(false);
        setIsStopped(true);
        setHasResults(true);
        setVisible(true);
        setTimer(0);
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`
        if (timer <= 0 && isActive) {
            return () => handleStop();
        }
        if (timer < 0) {
            setTimer(0);
        }
    });

    return <Col>
        <strong>{timer}</strong>
        <p>You clicked {count} times!</p>
        <div className="buttons">
            <Button onClick={handleStart} disabled={disableStart}>Start</Button>
            <Button disabled={isDisabled} onClick={() => setCount(count+1)}>
                Click me
            </Button>
        </div>
    </Col>
}