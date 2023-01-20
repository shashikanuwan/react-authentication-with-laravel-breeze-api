import { motion } from "framer-motion";
import React from "react";

const animation1 = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};

const animation2 = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  transition: { duration: 0.5 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animation2}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
