import { motion } from "framer-motion";
import { MainLeft } from "../components";
import { Box, Typography } from "@mui/material";
import homeImage1 from "../images/homeImage1.png";
import homeImage2 from "../images/homeImage2.png";
import { RouterAnimation } from "../utils/RouterAnimation";

export const MainPage = () => {
  const router = RouterAnimation();
  return (
    <motion.div
      initial={router.initial}
      animate={router.animate}
      exit={router.exit}
      transition={router.transition}
      style={{ marginTop: 70 }}
    >
      <Box
        style={{
          display: "flex",
          position: "relative",
          height: "calc(100vh - 82px)",
          width: "100%",
          margin: "0 auto"
        }}
      >
        <img
          src={homeImage2}
          alt="image2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            height: "100%"
          }}
        />
        <img
          src={homeImage1}
          alt="image1"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "75%"
          }}
        />
        <MainLeft />
      </Box>
    </motion.div>
  );
};
