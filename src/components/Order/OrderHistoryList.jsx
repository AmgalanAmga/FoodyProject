import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Stack, Box, Typography, Divider, Link } from "@mui/material";
import { OrderHistoryDetail } from "./OrderHistoryDetail";
import { fakeData } from "../../orderData";
export const OrderHistoryList = () => {
  const [days, setDays] = useState([]);
  const { setDetailOpen, setOrderHisDetail, dates, dateSearch, setOrdersInRange, ordersInRange } =
    useContext(MainContext);
  const getDetailInfo = (e, detail) => {
    setDetailOpen(true);
    setOrderHisDetail(detail);
  };
  useEffect(() => {
    const endDate = new Date(dates[1]);
    const startDate = new Date(dates[0]);
    const getDatesBetweenThem = (start, end) => {
      const daysArray = [];
      const date = new Date(start.getTime());
      while (date <= end) {
        daysArray.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      setDays(daysArray);
    };
    getDatesBetweenThem(startDate, endDate);
  }, [dates]);
  console.log(days);
  const collapsedDays = days.map((day) => day.toISOString().slice(0, 10));
  useEffect(() => {
    fakeData.filter((el) => {
      collapsedDays.forEach((day) => {
        if (day === el.date) {
          console.log(el);
          setOrdersInRange((pre) => [...pre, el]);
        }
      });
    });
  }, [dateSearch]);
  return (
    <>
      <Stack
        direction={"column"}
        divider={<Divider orientation="horizontal" />}
        width="900px"
        m="20px auto 0"
      >
        {ordersInRange.map((el, i) => {
          return (
            <Box
              key={i}
              sx={{
                py: 3,
                columnGap: 26,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">{el.date}</Typography>
              <Link
                sx={{ fontSize: "20px" }}
                onClick={(e) => getDetailInfo(e, el)}
              >
                Дэлгэрэнгүй
              </Link>
            </Box>
          );
        })}
      </Stack>
      <OrderHistoryDetail />
    </>
  );
};
