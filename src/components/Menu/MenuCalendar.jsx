import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
export const MenuCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  const a = ["1 - 8", "8 - 15", "15 - 22", "22 - 29"];
  const days = getDays(year, month);
  const weekArray = new Array(Math.floor(days / 7)).fill(a);
  return (
    <Box
      sx={{
        mt: "200px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "800px",
        mx: "auto"
      }}
    >
      <Box>
        <Typography textAlign={"center"} variant="h3" fontWeight={"600"}>
          Хоолны цэс
        </Typography>
        <Typography
          textAlign={"center"}
          variant="p"
          color={"#A0A2A8"}
          fontSize={"18px"}
        >
          Та хоол захиалах гэж буй долоо хоногоо сонгоно уу
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {weekArray.map((week, idx) => (
          <Grid
            item
            xs={3}
            key={idx}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h6"
              sx={{
                py: "4px",
                fontSize: 16,
                color: "white",
                fontWeight: 600,
                textAlign: "center",
                background: "#66B60F",
                borderRadius: "6px 6px 0 0"
              }}
            >
              {month}-р сар
            </Typography>
            <Link
              to="/menuMain"
              style={{
                fontSize: "32px",
                color: "#66B60F",
                padding: "25px 0",
                textAlign: "center",
                background: "#F5F5F7"
              }}
            >
              {week[idx]}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
