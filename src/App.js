import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';

const synth =  new Tone.Synth().toDestination();

function playSynth(){
  synth.triggerAttackRelease("C4", "8n");
}

function App() {
  return (
    <div className="App">
        <button id='button' onClick={playSynth}>Click to play</button>
    </div>
  );
}

export default App;
