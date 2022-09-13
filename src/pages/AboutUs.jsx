import React from "react";
import { motion } from "framer-motion";
import { RouterAnimation } from "../utils/RouterAnimation";
export const AboutUs = () => {
  const router = RouterAnimation();
  return (
    <motion.div
      initial={router.initial}
      animate={router.animate}
      exit={router.exit}
      transition={router.transition}
      style={{marginTop:70}}
    >
      AboutUs
    </motion.div>
  );
};
