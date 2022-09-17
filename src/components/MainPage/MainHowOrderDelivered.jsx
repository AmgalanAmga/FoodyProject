import React from "react";
import number1 from "../../images/1.png";
import number2 from "../../images/2.png";
import number3 from "../../images/3.png";
import clock1 from "../../images/clock 1.png";
import clock2 from "../../images/clock 2.png";
import clock3 from "../../images/clock 3.png";
import screen1 from "../../images/screen1.png";
import screen2 from "../../images/screen2.png";
import screen3 from "../../images/screen3.png";
import howOrder from "../../images/howOrder.PNG";
import { Box, Typography } from "@mui/material";

export const MainHowOrderDelivered = () => {
  const clocks = [clock1, clock2, clock3];
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        marginTop: "50px",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img src={howOrder} alt="" style={{ width: "35%" }} />
      <Box sx={{ display: "flex", width: "60%", columnGap: "20px" }}>
        <img src={screen1} alt="" style={{ width: "50%" }} />
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <img src={number1} alt="number 1" style={{ width: "100%" }} />
          <Typography
            variant="p"
            sx={{ fontSize: "20px", textAlign: "justify", color: "#A0A2A8" }}
          >
            Монголын хөрсөнд тариалсан шинэхэн хүнсний ногоо нийлүүлэгчээс долоо
            хоногт 2 удаа хүнсний ногоогоо татан авна.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "60%", columnGap: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <img src={number2} alt="number 1" style={{ width: "60%" }} />
          <Typography
            variant="p"
            sx={{ fontSize: "20px", textAlign: "justify", color: "#A0A2A8" }}
          >
            Агуулхад ирсэн хүнсний ногоог цэвэрлэн, ангилна.
          </Typography>
        </Box>
        <img src={screen2} alt="" style={{ width: "50%" }} />
      </Box>
      <Box sx={{ display: "flex", width: "60%", columnGap: "20px" }}>
        <img src={screen3} alt="" style={{ width: "50%" }} />
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <img src={number3} alt="number 1" style={{ width: "100%" }} />
          <Typography
            variant="p"
            sx={{ fontSize: "20px", textAlign: "justify", color: "#A0A2A8" }}
          >
            Монголын хөрсөнд тариалсан шинэхэн хүнсний ногоо нийлүүлэгчээс долоо
            хоногт 2 удаа хүнсний ногоогоо татан авна.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="span"
          textAlign="center"
          sx={{ color: "#A0A2A8", size: 20 }}
        >
          Бидний тухай
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            display: "flex",
            fontSize: "40px",
            columnGap: "15px",
            fontWeight: "500",
            marginTop: "-15px"
          }}
        >
          Бидний{" "}
          <Typography variant="span" sx={{ color: "#66B60F" }}>
            давуу
          </Typography>{" "}
          талууд
        </Typography>
      </Box>
      <Box sx={{ display: "flex", columnGap: "40px", my: "50px" }}>
        {clocks.map((clock, i) => (
          <Box
            key={i}
            sx={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "10px solid #F5F5F7"
            }}
          >
            <img src={clock} alt="" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
