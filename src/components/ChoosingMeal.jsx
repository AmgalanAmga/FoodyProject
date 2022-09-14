import { useState } from "react";
import { foodDatas } from "../data";
import { FoodCart } from "./FoodCart";
import ellipse from "../images/Ellipse 22.png";
import forkKnife from "../images/forkKnife.png";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material";
export const ChoosingMeal = () => {
  const [categoryValue, setVategoryValue] = useState("");
  const selectArray = [
    {
      category: "Ангилах",
      options: [
        "Бүгд",
        "Цагаан хоол",
        "Цавуулаггүй",
        "Хөнгөн хоол",
        "Хүнд хоол",
      ],
    },
    { category: "Үнэ", options: ["Бүгд", "Хямдаас үнэтэй", "Үнэтэйгээс хямд"] },
  ];
  const handleChange = (event) => {
    setVategoryValue(event.target.value);
  };
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
      <Box sx={{ display: "flex", mt: 16, columnGap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 15, display: "flex", width: "100%", columnGap: 3 }}>
            {selectArray.map((select, i) => (
              <FormControl sx={{ flex: 1 }}>
                <InputLabel>{select.category}</InputLabel>
                <Select
                  value={categoryValue}
                  label={select.category}
                  onChange={handleChange}
                >
                  {select.options.map((option, i) => (
                    <MenuItem key={i} value={10}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
          <Grid container columnSpacing={4} rowSpacing={12}>
            {foodDatas.map((food, i) => (
              <Grid item xs={4} key={i}>
                <FoodCart food={food} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ flex: 1 }}>2</Box>
      </Box>
    </Box>
  );
};
