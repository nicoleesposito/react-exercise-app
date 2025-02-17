import { useState, useEffect, useRef } from "react";

function Duration({ exercise, goToScreen }) {
    // state and refs
    const [running, setRunning] = useState(false);
    const [curTime, setCurTime] = useState(0);
    const intervalId = useRef(null);
    const startTime = useRef(0);

    // effect to manage the timer
    useEffect(() => {
        if (running) {
            startTime.current = Date.now() - curTime;
            intervalId.current = setInterval(() => {
                setCurTime(Date.now() - startTime.current);
            }, 10);
        } else {
            clearInterval(intervalId.current);
        }

        return () => clearInterval(intervalId.current);
    }, [running]);

    // functions for starting, stopping, and resetting the timer
    function start() {
        setRunning(true);
    }

    function stop() {
        setRunning(false);
    }

    function reset() {
        setRunning(false);
        setCurTime(0);
    }

    // formatting the timer's digits
    function timeFormat() {
        let minutes = Math.floor((curTime / (1000 * 60)) % 60);
        let seconds = Math.floor((curTime / 1000) % 60);
        let milliseconds = Math.floor((curTime % 1000) / 10);
        // padding the values to format the zeros
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    // components displayed as html
    return (
        <div className="duration">
            <button className="back_btn" onClick={() => goToScreen("home")}> &lt; </button>
            <div className="duration_header">
                <h2>{exercise}</h2>
                <h3>Duration</h3>
            </div>
            <div className="duration_container">
                <div className="display">{timeFormat()}</div>
                <div className="controls">
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>


        </div>

    );
}

export default Duration;
