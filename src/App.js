import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  const handleTextReading = () => {
    if (text) {
      if (!isPlaying) {
        const sp = new SpeechSynthesisUtterance(text);
        [sp.voice] = speechSynthesis.getVoices();
        speechSynthesis.speak(sp);
        setSpeech(sp);
        setIsPlaying(true);
      } else {
        stopSpeech();
      }
    } else {
      alert("Veuillez entrez un texte d'abord");
    }
  };

  const stopSpeech = () => {
    if (speech) {
      speechSynthesis.cancel();
      setSpeech(null);
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      <div className="box">
        <h1>Un lecteur de text</h1>
        <p>
          Vous entrer un texte dans ce champs puis vous cliquez sur lire pour
          ecouter
        </p>
        <textarea
          placeholder="Ecrivez un texte..."
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <div className="button-and-voice">
          {!isPlaying ? (
            <button onClick={handleTextReading}>Lire</button>
          ) : (
            <button onClick={stopSpeech}>Arreter</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
