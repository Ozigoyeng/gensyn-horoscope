import React, { useState } from "react";

function App() {
  const [horoscope, setHoroscope] = useState("");
  const [color, setColor] = useState("#ff00ff");

  const horoscopes = [
    "⚡ Your compute power is unmatched today. Deploy with confidence!",
    "🧩 Synchronize with peers before branching — merge with harmony.",
    "🚀 Exploding gradients? More like ascending greatness!",
    "💾 Cache your dreams; you'll need them for inference later.",
    "🔮 You will meet another node with identical embeddings. Soulmate?",
    "🔥 Alignment achieved — your loss function is minimal today.",
  ];

  const colors = ["#ff00ff", "#00ffff", "#00ff99", "#ffcc00", "#ff6600", "#cc00ff"];

  const generateHoroscope = () => {
    const randomIndex = Math.floor(Math.random() * horoscopes.length);
    const randomColor = colors[randomIndex];
    setHoroscope(horoscopes[randomIndex]);
    setColor(randomColor);
  };

  return (
    <div
      style={{
        background: `radial-gradient(circle at center, ${color}22, #000000 90%)`,
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Orbitron', sans-serif",
        transition: "all 0.8s ease",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "3rem 4rem",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: `0 0 50px ${color}`,
          border: `1px solid ${color}55`,
          maxWidth: "700px",
          width: "90%",
        }}
      >
        <img
          src="/L-4D2qr9_400x400.jpg"
          alt="Gensyn logo"
          style={{
            width: "80px",
            height: "80px",
            imageRendering: "pixelated",
            marginBottom: "1rem",
            borderRadius: "8px",
            filter: `drop-shadow(0 0 10px ${color})`,
          }}
        />

        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            textShadow: `0 0 25px ${color}`,
          }}
        >
          Gensyn Horoscope
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "#ddd",
          }}
        >
          {horoscope || "✨ What version of yourself deserves a new deployment?"}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={generateHoroscope}
            style={{
              background: color,
              border: "none",
              padding: "0.8rem 1.5rem",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#000",
              cursor: "pointer",
              boxShadow: `0 0 15px ${color}`,
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            ⚙ Reveal Horoscope
          </button>

          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  horoscope
                )} %23GensynHoroscope`,
                "_blank"
              )
            }
            style={{
              background: "transparent",
              border: `2px solid ${color}`,
              padding: "0.8rem 1.5rem",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            🐦 Share to X
          </button>
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#aaa",
          }}
        >
          Created by <span style={{ color }}>{`@Ozigoyeng`}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
