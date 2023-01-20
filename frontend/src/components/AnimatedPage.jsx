import { motion } from "framer-motion";
import React from "react";

const pageAnimation1 = {
  initial: { opacity: 0.6, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const pageAnimation2 = {
  initial: { opacity: 0.6, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0.6, scale: 1 },
};

const pageAnimation3 = {
  initial: { opacity: 0.8 },
  animate: { opacity: 1 },
  exit: { opacity: 0.8 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimation3}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
