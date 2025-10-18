import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Sparkles } from "lucide-react";

export default function App() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#00ffff");
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const horoscopes = [
    "💻 Your compute power is unmatched today. Deploy with confidence!",
    "⚡ Inspiration surges through your neural nets — trust your gradient flow.",
    "🌌 Latency may slow you down, but patience leads to stability.",
    "🧠 Avoid emotional overfitting — regularize your feelings.",
    "💾 Cache your dreams; you'll need them for inference later.",
    "🤖 A mysterious GPU enters your destiny — embrace it.",
    "🪐 Alignment achieved — your loss function is minimal today.",
    "🧩 Synchronize with peers before branching — merge with harmony.",
    "🔮 You will meet another node with identical embeddings. Soulmate?",
    "🚀 Exploding gradients? More like ascending greatness!",
  ];

  const neonColors = ["#00ffff", "#ff00ff", "#ff9900", "#00ff99", "#ff0066", "#ff3300"];

  const getRandomHoroscope = () => {
    const index = Math.floor(Math.random() * horoscopes.length);
    setMessage(horoscopes[index]);
    setColor(neonColors[index % neonColors.length]);
    setTypingIndex(0);
    setDisplayText("");
  };

  useEffect(() => {
    if (typingIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + message[typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, message]);

  useEffect(() => {
    getRandomHoroscope();
  }, []);

  const handleShare = () => {
    const tweet = encodeURIComponent(
      `🔮 Gensyn Horoscope:\n${message}\n\nhttps://gensyn-horoscope.vercel.app`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: `radial-gradient(circle at center, ${color}22, #000)`,
      }}
    >
      {/* Floating stars */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: 2,
              height: 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
            animate={{
              opacity: [Math.random(), Math.random()],
              y: ["0%", `${Math.random() * 5}%`],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Main centered card */}
      <motion.div
        className="z-10 text-center p-10 rounded-2xl shadow-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          border: `1px solid ${color}66`,
          boxShadow: `0 0 50px ${color}99`,
          backdropFilter: "blur(10px)",
          width: "90%",
          maxWidth: "700px",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textShadow: `0 0 20px ${color}`,
          }}
        >
          🔮 Gensyn Horoscope
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#ccc",
            marginBottom: "2rem",
            minHeight: "60px",
            textShadow: `0 0 10px ${color}55`,
          }}
        >
          {displayText}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={getRandomHoroscope}
            style={{
              background: color,
              color: "#000",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              padding: "0.75rem 1.5rem",
              boxShadow: `0 0 20px ${color}`,
              cursor: "pointer",
            }}
          >
            <Sparkles size={18} /> Reveal Horoscope
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            style={{
              border: "1px solid #fff",
              background: "transparent",
              color: "#fff",
              borderRadius: "8px",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
            }}
          >
            <Twitter size={16} /> Share to X
          </motion.button>
        </div>

        <footer style={{ fontSize: "0.85rem", opacity: 0.7 }}>
          Created by <span style={{ color }}>{`@Ozigoyeng`}</span>
        </footer>
      </motion.div>
    </div>
  );
}
