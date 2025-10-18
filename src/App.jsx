import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Sparkles } from "lucide-react";

export default function App() {
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [color, setColor] = useState("#ff00ff");
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
    "🚀 Exploding gradients? More like ascending greatness!"
  ];

  const questions = [
    "What are you optimizing for this week?",
    "What process in your life needs regularization?",
    "Who can you synchronize with to improve your network?",
    "What gradients are you following right now?",
    "What dream have you cached but not yet executed?",
    "If your thoughts were a dataset, what needs cleaning?",
    "How can you improve convergence in your personal growth?",
    "What version of yourself deserves a new deployment?",
    "Which part of your life is currently overfitting?",
    "If life were a model, what parameter would you tune next?"
  ];

  const neonColors = ["#ff00ff", "#00ffff", "#ffb400", "#ff0066", "#00ff99", "#ff3300"];

  const getRandomHoroscope = () => {
    const index = Math.floor(Math.random() * horoscopes.length);
    const qIndex = Math.floor(Math.random() * questions.length);
    setMessage(horoscopes[index]);
    setQuestion(questions[qIndex]);
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
      `🔮 Gensyn Horoscope:\n${message}\n💭 ${question}\n\nhttps://gensyn-horoscope.vercel.app`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(circle at center, ${color}11, #000)`,
        color: "#fff",
      }}
    >
      {/* Animated glow background */}
      <motion.div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          background: `radial-gradient(circle at 30% 30%, ${color}11, transparent 70%), 
                       radial-gradient(circle at 70% 70%, ${color}22, transparent 80%)`,
          filter: `blur(120px)`,
          zIndex: 0,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating neon card */}
      <motion.div
        className="relative z-10 text-center p-10 rounded-2xl"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          border: `1px solid ${color}55`,
          boxShadow: `0 0 50px ${color}88`,
          backdropFilter: "blur(12px)",
          width: "90%",
          maxWidth: "700px",
          animation: "float 6s ease-in-out infinite",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: `0 0 25px ${color}`,
          }}
        >
          🔮 Gensyn Horoscope
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#ccc",
            marginBottom: "1.5rem",
            textShadow: `0 0 10px ${color}55`,
            minHeight: "60px",
          }}
        >
          {displayText}
        </p>

        {/* ✨ Daily Question */}
        <p
          style={{
            fontSize: "1rem",
            fontStyle: "italic",
            color: color,
            marginBottom: "2rem",
            textShadow: `0 0 8px ${color}`,
          }}
        >
          💭 {question}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
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
              padding: "0.8rem 1.6rem",
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
              border: `1px solid ${color}`,
              background: "transparent",
              color: color,
              borderRadius: "8px",
              padding: "0.8rem 1.6rem",
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
