import { useContext } from "react";
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
import { useState } from "react";

export const FoodOrderListTotalPrice = () => {
  const [expanded, setExpanded] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);
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
  const accordionExpand = (wDay) => (event, isExpanded) => {
    setExpanded(isExpanded ? wDay : false);
  };
  const filterFoods = (e, wDay) => {
    console.log(wDay.weekday);
    const filteredItems = myOrderedMeals.filter((item) => {
      //   return item.orderedFoodsDates.forEach((order) => {
      //     if (order.weekday === wDay.weekday) {
      //       setFilteredOrders([...item]);
      //     }
      //   });
    });
  };
  console.log(filteredOrders);
  const totalPrice = myOrderedMeals.reduce((accum, el) => accum + el.price, 0);
  return (
    <Stack direction={"column"} sx={{ position: "fixed", width: "45%" }}>
      {weekdays.map((day, i) => (
        <Accordion
          key={i}
          onClick={(e) => filterFoods(e, day)}
          expanded={expanded === day.weekday}
          onChange={accordionExpand(day.weekday)}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{day.weekday}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filteredOrders.map((order, ids) => (
              <List key={ids}>
                <FoodOrderListItem order={order} />
              </List>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Typography>Нийт үнэ: {totalPrice}₮</Typography>
        <Button
          onClick={handleNextStep}
          variant="contained"
          color="primary"
          size="medium"
          disabled={myOrderedMeals.length === 0}
        >
          Үргэлжлүүлэх
        </Button>
      </Box>
    </Stack>
  );
};
