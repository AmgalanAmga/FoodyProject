import { fakeData } from "../../orderData";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { OrderHistoryDetail } from "./OrderHistoryDetail";
import { Stack, Box, Typography, Divider, Link } from "@mui/material";

export const OrderHistoryList = () => {
  const [days, setDays] = useState([]);
  const {
    dates,
    dateSearch,
    setDetailOpen,
    ordersInRange,
    setOrdersInRange,
    setOrderHisDetail
  } = useContext(MainContext);

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

  const collapsedDays = days.map((day) => day.toISOString().slice(0, 10));
  useEffect(() => {
    fakeData.filter((el) => {
      collapsedDays.forEach((day) => {
        if (day === el.date) {
          setOrdersInRange((pre) => [...pre, el]);
        }
      });
    });
  }, [dateSearch]);

  return (
    <>
      <Stack
        width="900px"
        m="20px auto 0"
        direction={"column"}
        divider={<Divider orientation="horizontal" />}
      >
        {dates.length === 0 && (
          <Typography variant="h6" textAlign={"center"}>
            Он сар өдрөө сонгоно уу?
          </Typography>
        )}
        {ordersInRange.map((el, i) => {
          return (
            <Box
              key={i}
              sx={{
                py: 3,
                columnGap: 26,
                display: "flex",
                justifyContent: "center"
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
