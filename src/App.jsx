import React, { useState } from "react";
import "./App.css";

function App() {
  const [horoscope, setHoroscope] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [powerIndex, setPowerIndex] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const horoscopes = [
    "⚡ Your compute power is unmatched today. Deploy with confidence!",
    "🔮 You will merge harmoniously with a new node — trust the process.",
    "🧠 Your loss function is minimal today — alignment achieved.",
    "🚀 Cache your dreams; inference will recall them when you need it most.",
    "🌌 You are training in the right direction — gradients favor you.",
  ];

  const wisdoms = [
    "🕸 Every node has a destiny in the distributed cosmos.",
    "🧘 Don’t overfit to your past — generalize to your future.",
    "🌠 Latency fades, but alignment is forever.",
    "🧬 Balance your weights before you deploy your fate.",
    "🔗 The best merges happen when you resolve conflicts gracefully.",
  ];

  const revealHoroscope = () => {
    const randomHoroscope =
      horoscopes[Math.floor(Math.random() * horoscopes.length)];
    const randomWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    const randomPower = (Math.random() * 90 + 10).toFixed(2);
    setHoroscope(randomHoroscope);
    setWisdom(randomWisdom);
    setPowerIndex(randomPower);
  };

  const handleLogoClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 2) {
      alert("🧿 You’ve unlocked hidden alignment. Welcome, Pioneer.");
      setClickCount(0);
    }
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        background: "radial-gradient(circle at center, #180018, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Orbitron', sans-serif",
        color: "#fff",
        overflow: "hidden",
        animation: "pulse-bg 6s infinite alternate",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          width: "clamp(340px, 60%, 700px)",
          textAlign: "center",
          boxShadow: "0 0 40px 10px rgba(255, 0, 255, 0.3)",
        }}
      >
        <img
          src="/L-4D2qr9_400x400.jpg"
          alt="Gensyn logo"
          onClick={handleLogoClick}
          style={{
            width: "80px",
            height: "80px",
            marginBottom: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            imageRendering: "pixelated",
            filter: "drop-shadow(0 0 10px magenta)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        />

        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "0.8rem",
            textShadow: "0 0 15px magenta",
          }}
        >
          Gensyn Horoscope
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>
          {horoscope || "✨ What version of yourself deserves a new deployment?"}
        </p>

        {wisdom && (
          <p
            style={{
              fontSize: "0.95rem",
              color: "#ff66ff",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            {wisdom}
          </p>
        )}

        {powerIndex && (
          <p
            style={{
              fontSize: "1rem",
              color: "#f5d742",
              marginBottom: "1.5rem",
            }}
          >
            ⚙ Compute Power Index: {powerIndex} TFLOPS
          </p>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={revealHoroscope}
            style={{
              backgroundColor: "#ff00cc",
              border: "none",
              padding: "0.8rem 1.5rem",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 15px #ff00cc",
            }}
          >
            ⚙ Reveal Horoscope
          </button>

          <button
            onClick={() =>
              window.open(
                "https://twitter.com/intent/tweet?text=✨ Check out my Gensyn Horoscope! https://gensyn-horoscope.vercel.app",
                "_blank"
              )
            }
            style={{
              backgroundColor: "transparent",
              border: "1px solid #ff00cc",
              padding: "0.8rem 1.5rem",
              color: "#ff99ff",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            🪶 Share to X
          </button>
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "1.5rem",
            color: "#ff99ff",
          }}
        >
          Created by <a href="https://x.com/Ozigoyeng">@Ozigoyeng</a>
        </p>
      </div>
    </div>
  );
}

export default App;
