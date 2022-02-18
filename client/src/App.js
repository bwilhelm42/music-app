import './App.css';

function App() {
  return (
    <div>
      <button onClick={playAudio}>play</button>
    </div>
  );
}

async function playAudio() {
  let audioElem = document.querySelector('audio');
  audioElem.play()
}

export default App;
