import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { foodPageChanging } from "../../utils/RouterAnimation";
import { Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { LocalDining } from "@mui/icons-material";
import { MainContext } from "../../context/MainContext";
export const MenuFoodDetailCard2 = () => {
  const [convertArrIntoObj, setConvertArrIntoObj] = useState([]);
  const { monthWeekDays, setMyOrderedMeals } =
    useContext(MainContext);
  const page = foodPageChanging();
  const weekdays = [
    "Даваа",
    "Мягмар",
    "Лхагва",
    "Пүрэв",
    "Баасан",
    "Бямба",
    "Ням"
  ];
  const weekdaysCodes = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7
  };
  const getWeekdayLetter = monthWeekDays.map((day) =>
    day.toString().slice(0, 3)
  );
  const dates = monthWeekDays.map((day) => day.toISOString().slice(0, 10));
  useEffect(() => {
    setConvertArrIntoObj(
      dates.map((date, idx) => {
        return { day: getWeekdayLetter[idx], date: date };
      })
    );
  }, []);
  convertArrIntoObj.sort((a, b) => {
    return weekdaysCodes[a.day] - weekdaysCodes[b.day];
  });
  const storeChosenMeals = (e, date, weekday) => {
    setMyOrderedMeals((preStates) =>
      preStates.map((state) => {
        return {
          ...state,
          orderedFoodsDates: [
            ...state.orderedFoodsDates,
            { date: date, weekday: weekday }
          ]
        };
      })
    );
  };
  return (
    <motion.div
      initial={page.initial}
      animate={page.animate}
      exit={page.exit}
      transition={page.transition}
      style={{ marginTop: "40px" }}
    >
      <Grid container>
        {convertArrIntoObj.map((day, i) => (
          <Grid
            item
            xs={6}
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onClick={(e) => storeChosenMeals(e, day.date, weekdays[i])}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  checkedIcon={<LocalDining />}
                />
              }
              label={weekdays[i]}
            />
            <Typography mr={2}>{day.date}</Typography>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};
