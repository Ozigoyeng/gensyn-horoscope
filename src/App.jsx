import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Twitter, Sparkles } from "lucide-react";

export default function App() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#ff00ff");

  // ✅ Dibungkus useMemo supaya tidak dianggap berubah tiap render
  const horoscopes = useMemo(
    () => [
      "💻 Your compute power is unmatched today. Deploy with confidence!",
      "⚡ A surge of inspiration is coming — trust your gradient descent.",
      "🌌 The network latency may slow you down, but patience leads to stability.",
      "🧠 Expect overfitting in relationships — remember to regularize emotions.",
      "💾 Cache your dreams; you might need them later for inference.",
      "🤖 A mysterious GPU will enter your life. Don’t question it — embrace destiny.",
      "🪐 Alignment achieved. Your loss function is minimal today.",
      "🧩 Synchronize with peers before branching — collaboration is key.",
      "🔮 You will meet another node with identical embeddings. Soulmate?",
      "🚀 Your gradients are exploding… but in a good way.",
    ],
    []
  );

  const neonColors = useMemo(
    () => [
      "#ff00ff",
      "#00ffff",
      "#ff9900",
      "#ff0066",
      "#00ff99",
      "#ff3300",
    ],
    []
  );

  // ✅ Sekarang hook ini tidak akan memunculkan warning sama sekali
  const getDailyHoroscope = useCallback(() => {
    const today = new Date().toDateString();
    const hash = [...today].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const index = hash % horoscopes.length;
    setMessage(horoscopes[index]);
    setColor(neonColors[index % neonColors.length]);
  }, [horoscopes, neonColors]);

  useEffect(() => {
    getDailyHoroscope();
  }, [getDailyHoroscope]);

  const handleShare = () => {
    const tweet = encodeURIComponent(
      `🔮 Gensyn Horoscope:\n${message}\n\nhttps://gensyn-horoscope.vercel.app`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6"
      style={{
        background: `radial-gradient(circle at center, ${color}33, #000)`,
        color: "#fff",
        fontFamily: "'Orbitron', sans-serif",
        transition: "background 1s ease",
      }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🔮 Gensyn Horoscope
      </motion.h1>

      <motion.div
        className="text-xl max-w-md leading-relaxed"
        key={message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {message}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={getDailyHoroscope}
        className="mt-6 px-6 py-3 text-lg bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-lg flex items-center gap-2"
      >
        <Sparkles size={18} />
        Reveal My Node Horoscope
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="mt-4 px-4 py-2 border border-white/30 text-sm rounded-lg flex items-center gap-2"
      >
        <Twitter size={16} /> Share to X
      </motion.button>

      <footer className="mt-8 text-sm opacity-70">
        Created by{" "}
        <span style={{ color: color }}>@Ozigoyeng</span> · Gensyn Pioneer Candidate
      </footer>
    </div>
  );
}
