import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";

export const Payment = () => {
  const { activeStep, setActiveStep } = useContext(MainContext);
  const backButton = () => {
    setActiveStep(activeStep - 1);
  };
  const clickContinue = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <Box
      sx={{mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack direction={"row"}>
        <IconButton
          onClick={backButton}
          sx={{
            mx: 4,
            borderRadius: 2,
            border: "1px solid gray",
            width: 40,
            height: 40,
          }}
        >
          <ArrowLeft />
        </IconButton>
        <Typography variant="h4" textAlign={"center"} mb={3}>
          Чи төлбөрөө төлөөгүй
        </Typography>
      </Stack>

      <img
        src="https://www.boredpanda.com/blog/wp-content/uploads/2022/07/Cat-Virus-Exe-Funny-Pics-123-62c2f23a1a130__700.jpg"
        alt=""
      />
    </Box>
  );
};
