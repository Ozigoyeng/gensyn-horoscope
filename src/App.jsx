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
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: `radial-gradient(circle at center, ${color}22, #000)`,
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Floating stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [Math.random(), Math.random()],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Centered content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          boxShadow: `0 0 25px ${color}`,
          backdropFilter: "blur(8px)",
          border: `1px solid ${color}55`,
          maxWidth: "700px",
          width: "90%",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{
            textShadow: `0 0 25px ${color}`,
            color: "#fff",
          }}
        >
          🔮 Gensyn Horoscope
        </h1>

        {/* Message */}
        <p
          className="text-xl sm:text-2xl leading-relaxed mb-8"
          style={{
            textShadow: `0 0 10px ${color}55`,
            color: "#e0e0e0",
            minHeight: "80px",
          }}
        >
          {displayText}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-8 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={getRandomHoroscope}
            className="px-6 py-3 text-lg rounded-xl font-bold shadow-lg flex items-center gap-2"
            style={{
              background: color,
              color: "#000",
              boxShadow: `0 0 25px ${color}`,
            }}
          >
            <Sparkles size={20} /> Reveal Horoscope
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="px-5 py-3 border border-white/50 text-sm rounded-lg flex items-center gap-2"
            style={{
              color: "#fff",
            }}
          >
            <Twitter size={16} /> Share to X
          </motion.button>
        </div>

        {/* Footer */}
        <footer className="text-sm opacity-70">
          Created by <span style={{ color: color }}>@Ozigoyeng</span>
        </footer>
      </motion.div>
    </div>
  );
}
