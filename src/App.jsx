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

  // typing animation
  useEffect(() => {
    if (typingIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + message[typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, 30);
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
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, ${color}22, #000)`,
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden z-0">
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

      {/* Main content */}
      <div className="relative z-10 p-8">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textShadow: `0 0 20px ${color}` }}
        >
          🔮 Gensyn Horoscope
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl max-w-2xl leading-relaxed mx-auto"
          style={{
            textShadow: `0 0 8px ${color}55`,
            color: "#e0e0e0",
          }}
        >
          {displayText}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={getRandomHoroscope}
          className="mt-8 px-6 py-3 text-lg bg-transparent border-2 rounded-xl shadow-[0_0_20px] flex items-center gap-2 mx-auto"
          style={{
            borderColor: color,
            color: color,
            boxShadow: `0 0 20px ${color}`,
            transition: "all 0.3s ease",
          }}
        >
          <Sparkles size={20} /> Reveal My Node Horoscope
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="mt-4 px-4 py-2 border border-white/40 text-sm rounded-lg flex items-center gap-2 mx-auto"
        >
          <Twitter size={16} /> Share to X
        </motion.button>

        <footer className="mt-10 text-sm opacity-70">
          Created by <span style={{ color: color }}>@Ozigoyeng</span>
        </footer>
      </div>
    </div>
  );
}
