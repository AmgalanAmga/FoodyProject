import { useContext, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import { FoodOrderListItem } from "./FoodOrderListItem";
import { MainContext } from "../../context/MainContext";
import {
  Box,
  List,
  Stack,
  Button,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

export const FoodOrderListTotalPrice = () => {
  const weekdays = [
    { weekday: "Даваа", orders: [] },
    { weekday: "Мягмар", orders: [] },
    { weekday: "Лхагва", orders: [] },
    { weekday: "Пүрэв", orders: [] },
    { weekday: "Баасан", orders: [] },
    { weekday: "Бямба", orders: [] },
    { weekday: "Ням", orders: [] }
  ];

  const { myOrderedMeals, setActiveStep, activeStep } = useContext(MainContext);
  console.log(myOrderedMeals);
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Stack direction={"column"} sx={{ position: "fixed", width: "45%" }}>
      {weekdays.map((day, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{day.weekday}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {myOrderedMeals.map((order, ids) => (
              <List key={ids}>
                <FoodOrderListItem order={order} />
              </List>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Typography>Нийт үнэ:</Typography>
        <Button
          onClick={handleNextStep}
          variant="contained"
          color="primary"
          size="medium"
        >
          Үргэлжлүүлэх
        </Button>
      </Box>
    </Stack>
  );
};
