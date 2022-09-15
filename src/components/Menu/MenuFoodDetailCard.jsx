import { useContext } from "react";
import { Modal, Box, Typography, Grid } from "@mui/material";
import { MainContext } from "../../context/MainContext";
export const MenuFoodDetailCard = () => {
  const { menuOrderDetailOpen, setMenuOrderDetailOpen, foodCardDetailInfo } =
    useContext(MainContext);
  const handleClose = () => {
    setMenuOrderDetailOpen(false);
  };
  return (
    <Modal open={menuOrderDetailOpen} onClose={handleClose}>
      <Box
        sx={{
          p: 4,
          top: "50%",
          width: 600,
          left: "50%",
          boxShadow: 24,
          borderRadius: 4,
          position: "absolute",
          background: "#ffffff",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box>
          <img src={foodCardDetailInfo.image} alt="" />
        </Box>
        <Typography variant="h4">{foodCardDetailInfo.name}</Typography>
        <Typography variant="p">{foodCardDetailInfo.description}</Typography>
        <Box >
          
        </Box>
      </Box>
    </Modal>
  );
};
