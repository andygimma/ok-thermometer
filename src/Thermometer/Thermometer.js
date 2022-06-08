import React from "react";
import "./Thermometer.css";
import ThermometerFace from "./ThermometerFace/ThermometerFace";
import { MOODS } from "./utils";

function Thermometer() {
  const [mood, setMood] = React.useState();
  React.useEffect(() => {
    fetch(
      `https://ok-barometer.vercel.app/api/mood`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response[0].label)
        setMood(response[0].label)
       
        // NOTE
        // I can't reach the server because of a CORS error so I can't test this.
        // In production, I 
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="moods">
          <div className="mood" onClick={() => updateMood(MOODS[0])}></div>
          <div className="mood" onClick={() => updateMood(MOODS[1])}></div>
          <div className="mood" onClick={() => updateMood(MOODS[2])}></div>
          <div className="mood" onClick={() => updateMood(MOODS[3])}></div>
          <div className="mood" onClick={() => updateMood(MOODS[4])}></div>
        </div>
        <ThermometerFace mood={mood} />
        <p>Click a setting to change your mood.</p>
      </header>
    </div>
  );

  function updateMood(mood) {
    setMood(mood)
  }
}



export default Thermometer;
