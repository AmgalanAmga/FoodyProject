import { useState } from "react";
import { foodDatas } from "../data";
import { FoodCart } from "./Food/FoodCart";
import ellipse from "../images/Ellipse 22.png";
import forkKnife from "../images/forkKnife.png";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl
} from "@mui/material";
import { MenuFoodDetailCard, FoodOrderListTotalPrice } from "../components";

export const ChoosingMeal = () => {
  const [priceValue, setPriceValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const selectArray = [
    {
      category: "Ангилах",
      options: [
        "Бүгд",
        "Цагаан хоол",
        "Цавуулаггүй",
        "Хөнгөн хоол",
        "Хүнд хоол"
      ],
      func: (event) => setCategoryValue(event.target.value),
      value: categoryValue
    },
    {
      category: "Үнэ",
      options: ["Бүгд", "Хямдаас үнэтэй", "Үнэтэйгээс хямд"],
      func: (event) => setPriceValue(event.target.value),
      value: priceValue
    }
  ];
  return (
    <div>
      <Box sx={{ mt: "100px", borderTop: "1px solid #C4C4C4" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
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
                width: "20px"
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
                <FormControl sx={{ flex: 1 }} key={i}>
                  <InputLabel>{select.category}</InputLabel>
                  <Select
                    value={select.value}
                    label={select.category}
                    onChange={select.func}
                  >
                    {select.options.map((option, j) => (
                      <MenuItem key={j} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
            </Box>
            <Grid container columnSpacing={4} rowSpacing={12}>
              {foodDatas.map((food, k) => (
                <Grid item xs={6} md={3} lg={4} key={k}>
                  <FoodCart food={food} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ flex: 1 }}>
            <FoodOrderListTotalPrice />
          </Box>
        </Box>
      </Box>
      <MenuFoodDetailCard />
    </div>
  );
};
