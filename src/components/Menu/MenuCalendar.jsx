import { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import { MainContext } from "../../context/MainContext";

export const MenuCalendar = () => {
  const { setMonthWeekdays } = useContext(MainContext);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  /* Тухайн сар хэдэн өдөртэй вэ гэдгийг олох */

  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const a = ["1 - 7", "8 - 14", "15 - 21", "22 - 28"];
  const days = getDays(year, month);
  const weekArray = new Array(Math.floor(days / 7)).fill(a);

  /* Тодорхой 2 он, сар, өдрийн хоорондох өдрүүдийг тооцоолох
  Жишээ нь: 2022-09-01 - 2022-09-07 байвал
  2022-09-01
  2022-09-02
  2022-09-03
  2022-09-04
  2022-09-05
  2022-09-06
  2022-09-07
  */

  const whichWeek = (e, week) => {
    const chosenDays = week.split("-");
    const chosenDaysArray = [];
    const startDay = new Date(`${year}-${month}-${chosenDays[0]}`);
    const endDay = new Date(`${year}-${month}-${chosenDays[1]}`);
    const getDate = new Date(startDay.getTime());
    while (getDate <= endDay) {
      chosenDaysArray.push(new Date(getDate));
      getDate.setDate(getDate.getDate() + 1);
    }
    setMonthWeekdays(chosenDaysArray);
  };

  return (
    <Box
      sx={{
        mt: "200px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "800px",
        mx: "auto"
      }}
    >
      <Box>
        <Typography textAlign={"center"} variant="h3" fontWeight={"600"}>
          Хоолны цэс
        </Typography>
        <Typography
          textAlign={"center"}
          variant="p"
          color={"#A0A2A8"}
          fontSize={"18px"}
        >
          Та хоол захиалах гэж буй долоо хоногоо сонгоно уу
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {weekArray.map((week, idx) => (
          <Grid
            item
            xs={3}
            key={idx}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h6"
              sx={{
                py: "4px",
                fontSize: 16,
                color: "white",
                fontWeight: 600,
                textAlign: "center",
                background: "#66B60F",
                borderRadius: "6px 6px 0 0"
              }}
            >
              {month}-р сар
            </Typography>
            <Link
              to="/menuMain"
              onClick={(e) => whichWeek(e, week[idx])}
              style={{
                fontSize: "32px",
                color: "#66B60F",
                padding: "25px 0",
                textAlign: "center",
                background: "#F5F5F7"
              }}
            >
              {week[idx]}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
