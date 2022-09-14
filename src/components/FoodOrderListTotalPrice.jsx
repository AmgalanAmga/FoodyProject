import React from "react";
import {
  List,
  Stack,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FoodOrderListItem } from "./FoodOrderListItem";
const weekdays = [
  "Даваа",
  "Мягмар",
  "Лхагва",
  "Пүрэв",
  "Баасан",
  "Бямба",
  "Ням"
];
export const FoodOrderListTotalPrice = () => {
  return (
    <Stack direction={"column"} sx={{ position: "fixed", width: "45%" }}>
      {weekdays.map((day, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <FoodOrderListItem />
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};
