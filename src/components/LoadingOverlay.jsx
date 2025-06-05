import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  initial: { y: 0, opacity: 1 },
  animate: {
    y: "-100vh",
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    y: "-100vh",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function LoadingOverlay({ isVisible }) {
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
          }}
        />
      )}
    </AnimatePresence>
  );
} 