import "antd/dist/antd.css";
import { useContext } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Box, TextField } from "@mui/material";
import { MainContext } from "../../context/MainContext";
export const OrderCalendar = () => {
  const { setDates } = useContext(MainContext);
  const { RangePicker } = DatePicker;
  return (
    <Box
      sx={{
        mt: 5,
        mx: "auto",
        width: "500px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <RangePicker
        placeholder={["Эхлэл", "Төгсгөл"]}
        onChange={(values) =>
          setDates(
            values.map((item) => {
              return moment(item).format("YYYY-MM-DD");
            })
          )
        }
      />
    </Box>
  );
};
