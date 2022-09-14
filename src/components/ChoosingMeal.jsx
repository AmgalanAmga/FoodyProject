import React from "react";
import { foodDatas } from "../data";
import { FoodCart } from "./FoodCart";
import ellipse from "../images/Ellipse 22.png";
import forkKnife from "../images/forkKnife.png";
import { Box, Typography, Grid } from "@mui/material";
export const ChoosingMeal = () => {
  return (
    <Box sx={{ mt: "100px", borderTop: "1px solid #C4C4C4" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ position: "relative", mt: "52px", mb: 2 }}>
          <img src={ellipse} alt="ellipse" style={{ width: "64px" }} />
          <img
            src={forkKnife}
            alt="forkKnife"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "20px",
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ color: "#000723" }}>
          Хоолны меню
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "16px", letterSpacing: "2px" }}
        >
          Танд таалагдаж байгаа хоолоо сонгоно уу
        </Typography>
      </Box>
      <Box sx={{ display: "flex", mt: 16 }}>
        <Grid container sx={{ flex: 1 }} columnSpacing={4} rowSpacing={12}>
          {foodDatas.map((food, i) => (
            <Grid item xs={4}>
              <FoodCart key={i} food={food} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ flex: 1 }}>2</Box>
      </Box>
    </Box>
  );
};
