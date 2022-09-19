import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { MenuFoodDetailCard2 } from "./MenuFoodDetailCard2";
import { foodPageChanging } from "../../utils/RouterAnimation";
import {
  Box,
  Grid,
  Modal,
  Avatar,
  Button,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

export const MenuFoodDetailCard = () => {
  const page = foodPageChanging();
  const [next, setNext] = useState(false);
  const [continueClickCounter, setContinueClickCounter] = useState(0);
  const {
    myOrderedMeals,
    setMyOrderedMeals,
    foodCardDetailInfo,
    menuOrderDetailOpen,
    setMenuOrderDetailOpen
  } = useContext(MainContext);

  const handleClose = () => {
    setMenuOrderDetailOpen(false);
    setNext(false);
    setMyOrderedMeals([]);
    setContinueClickCounter(0);
  };

  const nextBtnClicked = (e) => {
    if (continueClickCounter !== 1) {
      setContinueClickCounter(continueClickCounter + 1);
      setNext(true);
    } else {
      setMenuOrderDetailOpen(false);
      setContinueClickCounter(0);
      setNext(false);
    }
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
          transform: "translate(-50%, -50%)"
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              border: "10px solid white",
              borderRadius: "50%"
            }}
          >
            <img
              src={foodCardDetailInfo.image}
              alt=""
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ textAlign: "justify" }}>
            <Typography textAlign={"center"} mt={2} variant="h4">
              {foodCardDetailInfo.name}
            </Typography>
            {!next ? (
              <motion.div
                initial={page.initial}
                animate={page.animate}
                exit={page.exit}
                transition={page.transition}
              >
                <Typography variant="p">
                  {foodCardDetailInfo.description}
                </Typography>
                <Grid container sx={{ mt: 4 }}>
                  {foodCardDetailInfo.recipe?.map((el, i) => (
                    <Grid
                      key={i}
                      item
                      md={4}
                      sx={{
                        display: "flex",
                        alignItems: "center ",
                        columnGap: 2,
                        justifyContent: "space-between"
                      }}
                    >
                      <Avatar src={el.icon} sx={{ width: 24, height: 24 }} />
                      <Box mr={2}>
                        <Typography variant="h6" sx={{ fontSize: "12px" }}>
                          {el.ingredient}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "12px" }}>
                          {el.amount}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Accordion>
                  <AccordionSummary>
                    <Typography variant="h6" fontSize={13}>
                      Тэжээллэг чанар
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="span">10гр бүтээгдэхүүнд</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="span">Илчлэг</Typography>
                      <Typography variant="span">2440ккал</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ) : (
              <MenuFoodDetailCard2 />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h6">{foodCardDetailInfo.price}₮</Typography>
          <Button onClick={nextBtnClicked} variant="contained" px={10}>
            Үргэлжүүлэх
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
