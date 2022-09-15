import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { MainContext } from "../context/MainContext";
import { Box, Typography, IconButton } from "@mui/material";
export const FoodCart = ({ food }) => {
  const { setMenuOrderDetailOpen, setFoodCardDetailInfo } =
    useContext(MainContext);
  const showFoodInfo = () => {
    setMenuOrderDetailOpen(true);
    setFoodCardDetailInfo(food);
  };
  return (
    <Box
      sx={{
        padding: 2,
        width: "12rem",
        height: "14rem",
        borderRadius: 2,
        position: "relative",
        border: "1px solid #C4C4C4",
      }}
    >
      <img
        src={food.image}
        style={{
          width: "120px",
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        alt="foodImage"
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ fontSize: "18px", width: "160px" }}
        >
          {food.name}
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ color: "#A0A2A8", fontSize: "14px" }}
        >
          {food.portion}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "83%",
          position: "absolute",
          bottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">{food.price}₮</Typography>
        <IconButton
          onClick={showFoodInfo}
          sx={{ color: "white", background: "#66B60F" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
