import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Stack, Box, Typography, Divider, Link } from "@mui/material";
import { OrderHistoryDetail } from "./OrderHistoryDetail";
export const OrderHistoryList = () => {
  const { setDetailOpen, setOrderHisDetail } = useContext(MainContext);
  const fakeData = [
    {
      orderID: 1,
      date: "2022-09-01",
      status: "Хүргэгдсэн",
      orders: [
        {
          productID: 156,
          productName: "Кимчижигээ",
          amount: 2,
          price: 33400
        },
        { productID: 586, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо нэг хотхон нэр байр нь"
    },
    {
      orderID: 2,
      date: "2022-09-02",
      status: "Савлагдсан",
      orders: [
        { productID: 98, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 45, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 2 хотхон нэр байр нь"
    },
    {
      orderID: 3,
      date: "2022-09-03",
      status: "Алдаатай",
      orders: [
        { productID: 156, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 32, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 3 хотхон нэр байр нь"
    },
    {
      orderID: 4,
      date: "2022-09-04",
      status: "Хүргэгдсэн",
      orders: [
        { productID: 75, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 596, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 4 хотхон нэр байр нь"
    },
    {
      orderID: 5,
      date: "2022-09-05",
      status: "Савлагдсан",
      orders: [
        { productID: 56, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 54, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 5 хотхон нэр байр нь"
    },
    {
      orderID: 6,
      date: "2022-09-06",
      status: "Алдаатай",
      orders: [
        { productID: 52, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 523, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 6 хотхон нэр байр нь"
    },
    {
      orderID: 7,
      date: "2022-09-07",
      status: "Хүргэгдсэн",
      orders: [
        { productID: 152, productName: "Кимчижигээ", amount: 2, price: 33400 },
        { productID: 123, productName: "Бүлгүги", amount: 1, price: 15000 }
      ],
      address: "СХД 40-р хороо 7 хотхон нэр байр нь"
    }
  ];
  const getDetailInfo = (e, detail) => {
    setDetailOpen(true);
    setOrderHisDetail(detail);
  };
  return (
    <>
      <Stack
        direction={"column"}
        divider={<Divider orientation="horizontal" />}
        width="900px"
        m="20px auto 0"
      >
        {fakeData.map((el, i) => (
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
        ))}
      </Stack>
      <OrderHistoryDetail />
    </>
  );
};
