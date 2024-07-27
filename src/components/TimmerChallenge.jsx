import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimmerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timerStarted, setTimmerStarted] = useState(false)
    const [timerExpired, setTimmerExpired] = useState(false)
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimmerExpired(true)
            dialog.current.showModal();
        }, targetTime * 1000);
        setTimmerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
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
                    <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'}  </p>
            </section>
        </>

    )
}