import { useContext } from "react";
import {
  Modal,
  Box,
  Typography,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  List
} from "@mui/material";
import moment from "moment";
import { MainContext } from "../../context/MainContext";
export const OrderHistoryDetail = () => {
  const { detailOpen, setDetailOpen, orderHisDetail } = useContext(MainContext);
  const { date, status, orders, address } = orderHisDetail;
  const handleClose = () => setDetailOpen(false);
  const weekDay = moment(date).isoWeekday();
  let weekDayName;
  switch (weekDay) {
    case 1:
      weekDayName = "Даваа гараг";
      break;
    case 2:
      weekDayName = "Мягмар гараг";
      break;
    case 3:
      weekDayName = "Лхагва гараг";
      break;
    case 4:
      weekDayName = "Пүрэв гараг";
      break;
    case 5:
      weekDayName = "Баасан гараг";
      break;
    case 6:
      weekDayName = "Бямба гараг";
      break;
    default:
      weekDayName = "Ням гараг";
      break;
  }
  const totalPrice = orders?.reduce((accum, el) => {
    return accum + el.price;
  }, 0);
  return (
    <div>
      <Modal open={detailOpen} onClose={handleClose}>
        <Box
          sx={{
            p: 4,
            width: "60%",
            boxShadow: 24,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "25px",
            background: "#ffffff"
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: 3,
              alignItems: "center"
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "22px" }}>
              {date}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                background: "#66B60F",
                color: "white",
                padding: "6px 48px",
                fontSize: "14px",
                borderRadius: "36px"
              }}
            >
              {status}
            </Typography>
          </Box>
          <Typography>Хаяг: {address}</Typography>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                textAlign={"center"}
                sx={{ background: "#F5F5F7", borderRadius: 2 }}
              >
                {weekDayName}
              </Typography>
              <List>
                {orders?.map((el, i) => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={el.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={el.productName}
                      secondary={`${el.amount}ш`}
                    />
                    <Typography variant="span" sx={{ ml: 4 }}>
                      Үнэ: {el.price}₮
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography textAlign={"right"}>
                Нийт үнэ: {totalPrice}₮
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
