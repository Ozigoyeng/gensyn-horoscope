import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [horoscope, setHoroscope] = useState("");
  const [powerIndex, setPowerIndex] = useState(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const horoscopes = [
    "🌌 Your alignment with the distributed cosmos is perfect today.",
    "💫 Don’t overfit to your past — generalize to your future.",
    "⚙️ Your compute nodes are synchronized — deploy with harmony.",
    "🧬 Cache your dreams; you'll need them for inference later.",
    "🚀 Latency fades, but alignment is forever.",
    "🪐 You’ve reached convergence. Celebrate your stability.",
    "🔮 Random seeds favor the bold — initialize something great!",
    "☁ Training may be slow, but wisdom converges exponentially.",
  ];

  // 🪄 Reveal Horoscope
  const revealHoroscope = () => {
    const randomIndex = Math.floor(Math.random() * horoscopes.length);
    setHoroscope(horoscopes[randomIndex]);
    setPowerIndex((Math.random() * 100).toFixed(2));
  };

  // 🎵 Auto play + fade in music
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      const fade = setInterval(() => {
        if (audio.volume < 0.4) {
          audio.volume += 0.01;
        } else {
          clearInterval(fade);
        }
      }, 200);
      audio.play().catch(() => {});
      setMusicOn(true);
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setMusicOn(!musicOn);
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} src="/gensyn-theme.mp3" loop preload="auto" />

      <div className="card">
        <img
          src="/L-4D2qr9_400x400.jpg"
          alt="Gensyn Logo"
          className="logo"
        />
        <h1>🔮 Gensyn Horoscope</h1>
        <p className="subtitle">
          🧩 Synchronize with peers before branching — merge with harmony.
        </p>

        {horoscope && (
          <>
            <p className="horoscope fade-in">{horoscope}</p>
            <p className="power fade-in">
              ⚙ Compute Power Index: <b>{powerIndex} TFLOPS</b>
            </p>
          </>
        )}

        <div className="buttons fade-in">
          <button onClick={revealHoroscope}>Reveal Horoscope</button>
          <button onClick={toggleMusic}>
            {musicOn ? "🔇 Stop Music" : "🎵 Play Music"}
          </button>
        </div>

        <footer className="fade-up">
          <p>
            Created by{" "}
            <a
              href="https://x.com/Ojigoyeng"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-link"
            >
              @Ojigoyeng
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
