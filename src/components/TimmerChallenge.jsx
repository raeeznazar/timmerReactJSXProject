import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimmerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        setTimeRemaining(targetTime * 1000)
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>
                    {title}
                </h2>
                {timerExpired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime}  {targetTime > 1 ? 'seconds' : 'second'}
                </p>
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>{timeIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>{timeIsActive ? 'Time is running...' : 'Timer inactive'}</p>
            </section>
        </>

    )
}