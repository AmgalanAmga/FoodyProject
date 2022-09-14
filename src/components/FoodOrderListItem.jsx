import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
export const FoodOrderListItem = () => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src="https://firebasestorage.googleapis.com/v0/b/foody-483a1.appspot.com/o/kimchiJige.png?alt=media&token=f4b13237-abab-46d6-8092-97d7005beff2" />
      </ListItemAvatar>
      <ListItemText primary="Кимчи Жигэ" secondary="11700₮" />
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 3 }}>
        <IconButton>
          <Remove />
        </IconButton>
        <Typography>2ш</Typography>
        <IconButton>
          <Add />
        </IconButton>
      </Box>
    </ListItem>
  );
};
