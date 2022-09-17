import { useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
export const FoodOrderListItem = ({ order }) => {
  const [amountCounter, setAmountCounter] = useState(1);
  const increaseAmount = (e) => {
    setAmountCounter(amountCounter + 1);
  };
  const descreseAmount = (e) => {
    setAmountCounter(amountCounter - 1);
  };
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={order.foodImage} />
      </ListItemAvatar>
      <ListItemText primary={order.foodName} secondary={`${order.price}₮`} />
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 3 }}>
        <IconButton onClick={descreseAmount}>
          <Remove />
        </IconButton>
        <Typography>{`${amountCounter}ш`}</Typography>
        <IconButton onClick={increaseAmount}>
          <Add />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </ListItem>
  );
};
