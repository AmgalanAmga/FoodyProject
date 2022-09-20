import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import {
  Box,
  Typography,
  TextField,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";

export const VerifyMyOrder = () => {
  const { activeStep, setActiveStep } = useContext(MainContext);
  const [verifyPhoneNumber, setVerifyPhoneNumber] = useState("");
  const backButton = () => {
    setActiveStep(activeStep - 1);
  };
  const clickContinue = () => {
    setActiveStep(activeStep + 1);
  };
  const phoneChange = (e) => setVerifyPhoneNumber(e.target.value);
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        minHeight: "90vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack direction={"row"}>
        <IconButton
          onClick={backButton}
          sx={{
            mx: 4,
            width: 40,
            height: 40,
            borderRadius: 2,
            border: "1px solid gray",
          }}
        >
          <ArrowLeft />
        </IconButton>
        <Typography variant="h5">Захиалга баталгаажуулах</Typography>
        <IconButton
          disabled={verifyPhoneNumber === ""}
          onClick={clickContinue}
          sx={{
            mx: 4,
            width: 40,
            height: 40,
            borderRadius: 2,
            border: "1px solid gray",
          }}
        >
          <ArrowRight />
        </IconButton>
      </Stack>

      <Typography
        variant="p"
        sx={{ width: 350, textAlign: "center", color: "#A0A2A8", mt: 3 }}
      >
        Та доорх хэсэгт утасны дугаараа оруулан "Үргэлжлүүлэх" товчийг дарснаар
        бид тань руу баталгаажуулах код илгээх болно.
      </Typography>
      <TextField
        onChange={phoneChange}
        sx={{ mt: 4 }}
        type={"text"}
        label="Утасны дугаараа оруулна уу ?"
      />
      <Button
        disabled={verifyPhoneNumber === ""}
        sx={{ mt: 3 }}
        onClick={clickContinue}
        variant="contained"
      >
        Үргэлжлүүлэх
      </Button>
    </Box>
  );
};
