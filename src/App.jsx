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
      className="w-screen h-screen flex items-center justify-center relative"
      style={{
        background: `radial-gradient(circle at center, ${color}22, #000)`,
        color: "#fff",
      }}
    >
      {/* Background stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(70)].map((_, i) => (
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
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content centered */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center p-10 rounded-2xl shadow-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.45)",
          border: `1px solid ${color}55`,
          boxShadow: `0 0 60px ${color}99`,
          backdropFilter: "blur(12px)",
          width: "90%",
          maxWidth: "700px",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-5xl sm:text-6xl font-bold mb-6"
          style={{ textShadow: `0 0 25px ${color}` }}
        >
          🔮 Gensyn Horoscope
        </h1>

        <p
          className="text-xl sm:text-2xl mb-8 leading-relaxed"
          style={{
            minHeight: "80px",
            color: "#ddd",
            textShadow: `0 0 10px ${color}55`,
          }}
        >
          {displayText}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={getRandomHoroscope}
            className="px-6 py-3 font-bold rounded-lg flex items-center gap-2"
            style={{
              background: color,
              color: "#000",
              boxShadow: `0 0 20px ${color}`,
            }}
          >
            <Sparkles size={20} /> Reveal Horoscope
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="px-5 py-3 border border-white/70 text-sm rounded-lg flex items-center gap-2 text-white"
          >
            <Twitter size={16} /> Share to X
          </motion.button>
        </div>

        <footer className="text-sm opacity-70">
          Created by <span style={{ color: color }}>@Ozigoyeng</span>
        </footer>
      </motion.div>
    </div>
  );
}
