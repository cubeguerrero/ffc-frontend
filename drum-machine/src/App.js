import React from 'react';
import './App.css';

function Button() {
  return (
    <button>
      <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
      Q
    </button>
  )
}

function App() {
  return (
    <div id="drum-machine" className="DrumMachine">
      <Button />
    </div>
  );
}

export default App;
