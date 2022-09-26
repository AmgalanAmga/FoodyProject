import { motion } from "framer-motion";
import { LocalDining } from "@mui/icons-material";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { foodPageChanging } from "../../utils/RouterAnimation";
import { weekdays, weekdaysCodes } from "../../utils/UsefulArrays";
import { Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";

export const MenuFoodDetailCard2 = () => {
  const page = foodPageChanging();
  const [convertArrIntoObj, setConvertArrIntoObj] = useState([]);
  const { monthWeekDays, setMyOrderedMeals } = useContext(MainContext);

  /* Date function-гаас гарсан хугацааны string-ээс 7 хоногийн 
  нэрний эхний 3 үсгийг авах
  */

  const getWeekdayLetter = monthWeekDays.map((day) =>
    day.toString().slice(0, 3)
  );

  /* Date function-гаас гарсан хугацааны string-гийг тоон хэлбэрт шилжүүлэх */

  const dates = monthWeekDays.map((day) => day.toISOString().slice(0, 10));
  useEffect(() => {
    setConvertArrIntoObj(
      dates.map((date, idx) => {
        return { day: getWeekdayLetter[idx], date: date };
      })
    );
  }, [dates, getWeekdayLetter]);

  /* Он сарыг даваагаас ням гараг хүртэл хугацаанаас хамаарч ангилах */

  convertArrIntoObj.sort((a, b) => {
    return weekdaysCodes[a.day] - weekdaysCodes[b.day];
  });

  /* Захиал хоолнуудыг хадгалах */

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
