import { useState } from "react";
import { motion } from "framer-motion";
import { MenuMainRouterAnimation } from "../utils/RouterAnimation";
import {
  Box,
  Step,
  styled,
  Button,
  Stepper,
  StepLabel,
  Typography,
  StepConnector,
} from "@mui/material";
import { ChoosingMeal } from "../components";

const StyledStep = styled(StepConnector)(({ theme }) => ({}));

export const MenuMain = () => {
  const [activeStep, seActiveStep] = useState(0);
  const router = MenuMainRouterAnimation();
  const steps = [
    "Хоолоо сонгох",
    "Хүргэлтийн мэдээлэл",
    "Утасны дугаараа баталгаажуулах",
    "Төлбөр төлөх",
  ];
  return (
    <motion.div
      initial={router.initial}
      animate={router.animate}
      exit={router.exit}
      transition={router.transition}
      style={{ marginTop: 100 }}
    >
      <Box
        style={{
          width: "90%",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((step, idx) => {
              return (
                <Step key={idx}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <ChoosingMeal />
      </Box>
    </motion.div>
  );
};
