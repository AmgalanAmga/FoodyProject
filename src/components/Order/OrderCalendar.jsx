import "antd/dist/antd.css";
import { useContext } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Box, Button } from "@mui/material";
import { MainContext } from "../../context/MainContext";
export const OrderCalendar = () => {
  const { setDates, setDateSearch,setOrdersInRange } = useContext(MainContext);
  const { RangePicker } = DatePicker;
  const searchBtn = (e) => {
    setDateSearch(true);
  };
  const showDates = (values) => {
    setDateSearch(false)
    setOrdersInRange([])
    setDates(
      values.map((item) => {
        return moment(item).format("YYYY-MM-DD");
      })
    );
  };
  return (
    <Box
      sx={{
        mt: 5,
        mx: "auto",
        width: "500px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <RangePicker
        placeholder={["Эхлэл", "Төгсгөл"]}
        onChange={(values) => showDates(values)}
      />
      <Button onClick={searchBtn} sx={{ ml: 1, px: 3 }} variant="contained">
        Хайх
      </Button>
    </Box>
  );
};
