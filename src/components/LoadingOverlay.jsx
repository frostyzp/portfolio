import { motion, AnimatePresence } from "framer-motion";
import cliSpinners from 'cli-spinners';
import { useMemo, useState, useEffect } from "react";


const overlayVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const KAOMOJIS = [
  "(づ｡◕‿‿◕｡)づ",
  "(✿◠‿◠)",
  "(｡♥‿♥｡)",
  "(¬‿¬)",
  "(•_•)",
  "(｡•̀ᴗ-)✧",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "(ง'̀-'́)ง",
  "(ʘ‿ʘ)",
  "(ಥ﹏ಥ)",
  "(☞ﾟヮﾟ)☞",
  "(づ￣ ³￣)づ",
  "(ノಠ益ಠ)ノ彡┻━┻",
  "(¬_¬)",
  "(ʕ•ᴥ•ʔ)",
  "(ง°ل͜°)ง",
  "(∩^o^)⊃━☆ﾟ.*･｡ﾟ",
  "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻",
  "(¬‿¬)",
  "(☞ ͡° ͜ʖ ͡°)☞"
];

function getRandomPosition() {
  // Returns {top, left} as percentages for random placement
  return {
    top: Math.random() * 80 + 5, // 5% to 85% from top
    left: Math.random() * 80 + 5 // 5% to 85% from left
  };
}

export default function LoadingOverlay({ isVisible }) {
  // Use the 'line2' spinner from cli-spinners
  const spinner = cliSpinners.line2;
  const [frameIdx, setFrameIdx] = useState(0);
  const [visibleKaomojis, setVisibleKaomojis] = useState([]); // [{kaomoji, top, left}]

  useEffect(() => {
    if (!isVisible) {
      setVisibleKaomojis([]);
      return;
    }
    let isCancelled = false;
    setVisibleKaomojis([]);
    // Shuffle kaomojis for random order
    const shuffled = KAOMOJIS.sort(() => 0.5 - Math.random());
    let i = 0;
    function showNext() {
      if (isCancelled || i >= shuffled.length) return;
      setVisibleKaomojis(prev => [
        ...prev,
        { kaomoji: shuffled[i], ...getRandomPosition(), key: `${shuffled[i]}-${i}` }
      ]);
      i++;
      setTimeout(showNext, Math.min(10 + i * 5, 70)); // Gradually increase delay from 10ms to 50ms
    }
    showNext();
    return () => { isCancelled = true; };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setFrameIdx((idx) => (idx + 1) % spinner.frames.length);
    }, spinner.interval);
    return () => clearInterval(interval);
  }, [isVisible, spinner]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayVariants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#fff",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Kaomojis */}
          {visibleKaomojis.map(({ kaomoji, top, left, key }) => (
            <motion.span
              key={key}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
                fontSize: "1rem",
                fontFamily: "CommitMono",
                pointerEvents: "none",
                userSelect: "none",
                color: "grey",
                zIndex: 10,
                whiteSpace: "nowrap",
              }}
            >
              {kaomoji}
            </motion.span>
          ))}
          {/* Spinner */}
          <span
            style={{
              fontSize: "2rem",
              fontFamily: "monospace",
              color: "black",
              userSelect: "none",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
              zIndex: 20,
            }}
            aria-label="Loading spinner"
          >
            {spinner.frames[frameIdx]}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 