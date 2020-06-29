import React from 'react';
import './App.css';

function Button(props) {
  const audioEl = React.useRef(null);
  const handleClick = (e) => {
    props.setSound(props.sound);
    audioEl.current.play();
  }
  const drumPadId = props.sound.name.replace(' ', '-');

  React.useEffect(() => {
    window.addEventListener('keydown', function(e) {
      if (e.key === props.sound.display || e.key === props.sound.display.toLowerCase()) {
        props.setSound(props.sound);
        audioEl.current.play();
      }
    });

    return () => {
      window.removeEventListener('keydown', function(e) {
        if (e.key === props.sound.display || e.key === props.sound.display.toLowerCase()) {
          props.setSound(props.sound);
          audioEl.current.play();
        }
      });
    };
  }, []);


  return (
    <button id={drumPadId} className="Drumpad_Button drum-pad" onClick={handleClick}>
      <audio id={props.sound.display} ref={audioEl} id={props.sound.display} className="clip" src={props.sound.filePath}></audio>
      {props.sound.display}
    </button>
  )
}

function Display({ sound }) {
  let d = sound.name ? sound.name : ''
  return (
    <div id="display" className="Display">
      {d}
    </div>
  )
}

function App() {
  const sounds = [
    {
      display: 'Q',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name: 'Heater 1'
    },
    {
      display: 'W',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name: 'Heater 2'
    },
    {
      display: 'E',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name: 'Heater 3'
    },
    {
      display: 'A',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name: 'Heater 4'
    },
    {
      display: 'S',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name: 'Clap'
    },
    {
      display: 'D',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name: 'Open HH'
    },
    {
      display: 'Z',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name: "Kick n' Hat"
    },
    {
      display: 'X',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name: 'Kick'
    },
    {
      display: 'C',
      filePath: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name: 'Closed HH'
    }
  ];

  const [sound, setSound] = React.useState({});

  return (
    <div id="drum-machine" className="DrumMachine">
      <Display sound={sound} />
      <div className="DrumPad">
        {sounds.map(s => <Button sound={s} setSound={setSound} />)}
      </div>
    </div>
  );
}

export default App;
