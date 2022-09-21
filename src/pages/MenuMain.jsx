import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import {
  Payment,
  ChoosingMeal,
  VerifyMyOrder,
  InformationOfAddress
} from "../components";
import { useContext, useEffect } from "react";
import { MenuMainRouterAnimation } from "../utils/RouterAnimation";
import {
  Box,
  Step,
  Button,
  Stepper,
  StepLabel,
  Typography,
  StepConnector
} from "@mui/material";

export const MenuMain = () => {
  const { setIndicatorIdx, activeStep, setActiveStep } =
    useContext(MainContext);
  const { pathname } = useLocation();
  const router = MenuMainRouterAnimation();
  const steps = [
    "Хоолоо сонгох",
    "Хүргэлтийн мэдээлэл",
    "Утасны дугаараа баталгаажуулах",
    "Төлбөр төлөх"
  ];

  /* Stepper-ийн хуудсуудруу шилжих */

  useEffect(() => {
    if (pathname === "/menuMain") return setIndicatorIdx(2);
  }, [pathname]);

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return <ChoosingMeal />;
      case 1:
        return <InformationOfAddress />;
      case 2:
        return <VerifyMyOrder />;
      default:
        return <Payment />;
    }
  };

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
          minHeight: "100vh"
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
        {activeStep === steps.length ? (
          <Typography>Thanks</Typography>
        ) : (
          <>{stepContent(activeStep)}</>
        )}
      </Box>
    </motion.div>
  );
};
