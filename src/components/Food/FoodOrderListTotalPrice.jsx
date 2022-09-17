import { useContext } from "react";
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
import { MainContext } from "../../context/MainContext";
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
  const { myOrderedMeals } = useContext(MainContext);
  console.log(myOrderedMeals);
  return (
    <Stack direction={"column"} sx={{ position: "fixed", width: "45%" }}>
      {weekdays.map((day, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {myOrderedMeals.map((order) => (
              <List>
                <FoodOrderListItem order={order} />
              </List>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};
