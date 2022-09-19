import React from "react";
import { Box, Typography, TextField } from "@mui/material";

export const VerifyMyOrder = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        mt: 4,
        flexDirection: "column"
      }}
    >
      <Typography variant="h5">Захиалга баталгаажуулах</Typography>
      <Typography
        variant="p"
        sx={{ width: 350, textAlign: "center", color: "#A0A2A8" }}
      >
        Та доорх хэсэгт утасны дугаараа оруулан "Үргэлжлүүлэх" товчийг дарснаар
        бид тань руу баталгаажуулах код илгээх болно.
      </Typography>
      <TextField mt={8} type={"text"} label="Утасны дугаараа оруулна уу ?" />
    </Box>
  );
};
