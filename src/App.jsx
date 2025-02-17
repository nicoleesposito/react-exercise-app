// imports of useState hooks, CSS styling, and componenents
import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import Duration from "./components/DurationExercise"
import Repetition from "./components/RepetitionExercise"

function App() {
  // sets states for the home screen, the mode, and the exercise
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState("");
  const [exerciseId, setExerciseId] = useState(null);

  // navigates to a new screen
  function goToScreen(newScreen, id = null) {
    setScreen(newScreen);
    if (id) setExerciseId(id); // sets the exerciseId if it's given
  }

  // mode selection for either repetition or duration
  function selectMode(selectedMode) {
    setMode(selectedMode);
    setScreen("home"); // keeps the users on the home screen after mode selection
  }

  // returns the components created based off of what states are in effect.
  return (
    <div>
      {screen === "home" && <Home selectMode={selectMode} mode={mode} goToScreen={goToScreen} />}
      {screen === "duration" && <Duration exercise={exerciseId} goToScreen={goToScreen} />}
      {screen === "repetition" && <Repetition exercise={exerciseId} goToScreen={goToScreen} />}
    </div>
  );
}

export default App;
