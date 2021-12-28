import "./App.css";
import video from "./earth.mp4";
import react, { useState, useEffect, useRef } from "react";

function App() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App">
      <video ref={videoRef} src={video} type="video/mp4" />
      <button onClick={handlePlay}>PLAY</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
