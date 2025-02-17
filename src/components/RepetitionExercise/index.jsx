import { useState } from "react";

function Repetition({ exercise, goToScreen }) {

    const [count, setCount] = useState(0);

    // function to increase the count
    function increaseCount() {
        setCount(count + 1);
    }
    console.log("Exercise received:", exercise);

    // function to decrease the count no more than 0
    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    // sets counter back to 0
    function resetCount() {
        setCount(0);
    }


    return (
        <div className="repetition">
            <button className="back_btn" onClick={() => goToScreen("home")}> &lt; </button>
            <div className="repetition_header">
                <h2 id="repetition_h2">{exercise}</h2>
                <h3>{exercise === "Running" ? "Laps" : "Repetition"}</h3>
            </div>
            <div className="counter_container">
                <div className="counter">
                    <button onClick={decreaseCount}> - </button>
                    <div className="current_number">
                        {count}
                    </div>
                    <button onClick={increaseCount}> + </button>
                </div>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    )

}

export default Repetition;