import React from "react";
import { motion } from "framer-motion";
import { RouterAnimation } from "../utils/RouterAnimation";
import { Typography } from "@mui/material";
import { OrderCalendar, OrderHistoryList } from "../components";
export const OrderHistory = () => {
  const router = RouterAnimation();
  return (
    <motion.div
      initial={router.initial}
      animate={router.animate}
      exit={router.exit}
      transition={router.transition}
      style={{ marginTop: 70 }}
    >
      <Typography variant="h4" textAlign="center">
        Захиалгын түүх
      </Typography>
      <OrderCalendar />
      <OrderHistoryList />
    </motion.div>
  );
};
