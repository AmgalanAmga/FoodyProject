import { useContext } from "react";
import { Link } from "react-router-dom";
import always from "../images/always.PNG";
import { MainContext } from "../context/MainContext";
import { Box, Typography, Button } from "@mui/material";
export const MainLeft = () => {
    const { setIndicatorIdx } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        top: "10%",
        left: "7%",
        zIndex: 15,
        width: 400,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <img src={always} alt="" />
      <Typography
        variant="p"
        sx={{
          width: "80%",
          color: "#474B5A",
          lineHeight: "24px",
          marginLeft: "25px"
        }}
      >
        Долоо хоногийн турш өөрийн гараар хүссэн хоолоо хийж идэхэд тань
        хэрэгтэй бүхий л орцуудыг өдөр бүр гэрт тань хүргэж өгнө.
      </Typography>
      <Button
        variant="contained"
        sx={{
          padding: "16px",
          margin: "40px 0 150px",
          width: "70%",
          fontWeight: "700",
          marginLeft: "25px"
        }}
        to="/menu"
        LinkComponent={Link}
        onClick={() => setIndicatorIdx(2)}
      >
        Цэстэй танилцах
      </Button>
      <Typography
        variant="p"
        sx={{
          width: "272px",
          lineHeight: "32px",
          color: "#A0A2A8",
          borderLeft: "4px solid #66B60F",
          paddingLeft: "20px",
          marginLeft: "25px"
        }}
      >
        Хоолны орц цуглуулахад хэцүү үеүүдээ бидэнд даатга !
      </Typography>
    </Box>
  );
};
