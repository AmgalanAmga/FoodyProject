import { Box } from "@mui/material";
import { motion } from "framer-motion";
import homeImage1 from "../images/homeImage1.png";
import homeImage2 from "../images/homeImage2.png";
import { RouterAnimation } from "../utils/RouterAnimation";
import { MainHowOrderDelivered, MainLeft } from "../components";

export const MainPage = () => {
  const router = RouterAnimation();
  return (
    <motion.div
      exit={router.exit}
      initial={router.initial}
      animate={router.animate}
      style={{
        width: "100%",
        marginTop: 70,
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
      transition={router.transition}
    >
      <Box sx={{ display: "flex" }}>
        <img
          src={homeImage2}
          alt=""
          style={{
            zIndex: 10,
            width: "40vw",
            height: "100vh",
            objectFit: "cover"
          }}
        />
        <img
          src={homeImage1}
          alt=""
          style={{
            width: "70vw",
            height: "100vh",
            objectFit: "cover"
          }}
        />
      </Box>
      <MainLeft />
      <MainHowOrderDelivered />
    </motion.div>
  );
};
