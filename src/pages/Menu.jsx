import React from "react";
import { motion } from "framer-motion";
import { MenuCalendar } from "../components";
import { RouterAnimation } from "../utils/RouterAnimation";
export const Menu = () => {
  const router = RouterAnimation();
  return (
    <motion.div
      initial={router.initial}
      animate={router.animate}
      exit={router.exit}
      transition={router.transition}
      style={{ marginTop: 70 }}
    >
      <MenuCalendar />
    </motion.div>
  );
};
