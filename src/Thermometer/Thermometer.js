import React from "react";
import "./Thermometer.css";
import ThermometerFace from "./ThermometerFace/ThermometerFace";
import { MOODS } from "./utils";

function Thermometer() {
  const [mood, setMood] = React.useState();
  return (
    <div className="App">
      <header className="App-header">
        <div className="moods">
          <div className="mood" onClick={() => setMood(MOODS[0])}></div>
          <div className="mood" onClick={() => setMood(MOODS[1])}></div>
          <div className="mood" onClick={() => setMood(MOODS[2])}></div>
          <div className="mood" onClick={() => setMood(MOODS[3])}></div>
          <div className="mood" onClick={() => setMood(MOODS[4])}></div>
        </div>
        <ThermometerFace mood={mood} />
        <p>Click a setting to change your mood.</p>
      </header>
    </div>
  );
}

export default Thermometer;
