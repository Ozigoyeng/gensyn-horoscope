import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import logo from "/L-4D2qr9_400x400.jpg";

const TABS = ["Horoscope", "Fortune", "Pick-up Lines", "AI Console"];

const HOROSCOPES = [
  "🌌 Your compute power is unmatched today. Deploy with confidence!",
  "🧠 Don’t overfit to your past — generalize to your future.",
  "⚡ Synchronize with peers before branching — merge with harmony.",
  "💾 You’ve reached convergence. Celebrate your stability.",
  "🤖 Latency is low, accuracy is high — optimize your destiny.",
  "🪐 A new dataset will enrich your life. Curate wisely.",
  "🔮 Random seeds favor the bold — initialize something great!",
];

const FORTUNES = [
  "Your gradients will converge faster than expected.",
  "Avoid unstable learning rates in relationships.",
  "A silent GPU is plotting something beautiful.",
  "Normalize your worries — standardize your joy.",
  "Your next commit will finally pass the build.",
  "Great embeddings attract great opportunities.",
  "Trust your optimizer, but verify your data.",
];

const LINES = [
  "Are you a loss function? Because you minimize my sadness.",
  "You must be overfitted — you only work for me.",
  "Are you GPT? Because you complete me.",
  "My parameters align perfectly with yours.",
  "Are you a transformer? Because you got my attention in parallel.",
  "Call me dataset — I’m ready to be curated by you.",
];

const CONSOLE_SCRIPT = [
  "> Initializing quantum cores...",
  "> Syncing distributed GPUs...",
  "> Calibrating gradients...",
  "> Resolving cosmic latency...",
  "> Calculating destiny...",
  "> ⚡ Your future: Infinite convergence detected.",
];

export default function App() {
  const [tab, setTab] = useState(TABS[0]);
  const [playing, setPlaying] = useState(false);
  const [dance, setDance] = useState(false);
  const audioRef = useRef(null);

  const [typed, setTyped] = useState("");
  const [power, setPower] = useState(null);
  const [fullMsg, setFullMsg] = useState("");

  const [fortune, setFortune] = useState("");
  const [line, setLine] = useState("");
  const [consoleLines, setConsoleLines] = useState([]);
  const [consoleRun, setConsoleRun] = useState(false);

  const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const revealHoroscope = () => {
    const msg = rand(HOROSCOPES);
    setFullMsg(msg);
    setTyped("");
    setPower((90 + Math.random() * 10).toFixed(2));

    let i = 0;
    const id = setInterval(() => {
      setTyped((prev) => prev + msg[i]);
      i += 1;
      if (i >= msg.length) clearInterval(id);
    }, 30);
  };

  const crackFortune = () => setFortune(rand(FORTUNES));
  const pickupLine = () => setLine(rand(LINES));

  const toggleMusic = () => {
    if (!audioRef.current) return;
    const a = audioRef.current;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0;
      a.play().then(() => {
        setPlaying(true);
        let v = 0;
        const fade = setInterval(() => {
          v += 0.05;
          a.volume = Math.min(0.8, v);
          if (v >= 0.8) clearInterval(fade);
        }, 100);
      });
    }
  };

  const runConsole = async () => {
    if (consoleRun) return;
    setConsoleRun(true);
    setConsoleLines([]);
    for (const line of CONSOLE_SCRIPT) {
      await new Promise((r) => setTimeout(r, 600));
      setConsoleLines((prev) => [...prev, line]);
    }
    setConsoleRun(false);
  };

  useEffect(() => {
    revealHoroscope();
  }, []);

  return (
    <div className="app">
      <audio ref={audioRef} src="/gensyn-theme.mp3" loop preload="auto" />
      <div className="card">
        <img src={logo} alt="Gensyn logo" className={`logo ${dance ? "dance" : ""}`} />
        <h1>🔮 Gensyn Horoscope</h1>
        <p className="tagline">🧩 Synchronize with peers — merge with harmony.</p>

        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Horoscope" && (
          <div className="section">
            <p className="typed">{typed}</p>
            {power && (
              <p className="power">
                ⚙ Compute Power Index: <b>{power} TFLOPS</b>
              </p>
            )}
            <div className="buttons">
              <button className="cta" onClick={revealHoroscope}>
                ✨ Reveal Horoscope
              </button>
              <button className="music" onClick={toggleMusic}>
                {playing ? "⏸ Pause Music" : "🎵 Play Music"}
              </button>
              <button className="ghost" onClick={() => setDance((d) => !d)}>
                🪩 {dance ? "Stop Dance" : "Dance Mode"}
              </button>
            </div>
          </div>
        )}

        {tab === "Fortune" && (
          <div className="section">
            <p className="subtitle">🍪 AI Fortune Cookie</p>
            <p className="fortune">{fortune || "Crack your cookie for wisdom!"}</p>
            <button className="cta" onClick={crackFortune}>
              🍪 Crack It!
            </button>
          </div>
        )}

        {tab === "Pick-up Lines" && (
          <div className="section">
            <p className="subtitle">💘 Neural Pick-up Lines</p>
            <p className="line">{line || "Generate a cheeky AI line!"}</p>
            <button className="cta" onClick={pickupLine}>
              💬 Generate Line
            </button>
          </div>
        )}

        {tab === "AI Console" && (
          <div className="section console">
            {consoleLines.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
            {!consoleLines.length && <div className="dim">> Stand by for initialization…</div>}
            <button className="cta" onClick={runConsole} disabled={consoleRun}>
              ⚡ {consoleRun ? "Running…" : "Run Diagnostic"}
            </button>
          </div>
        )}

        <footer>
          <p>
            Created by{" "}
            <a
              className="credit"
              href="https://x.com/Ojigoyeng"
              target="_blank"
              rel="noreferrer"
            >
              @Ojigoyeng
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
