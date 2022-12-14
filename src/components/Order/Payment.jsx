import { useContext } from "react";
import { ArrowLeft } from "@mui/icons-material";
import { MainContext } from "../../context/MainContext";
import {
  Box,
  Stack,
  Button,
  Avatar,
  IconButton,
  Typography
} from "@mui/material";

export const Payment = () => {
  const { activeStep, setActiveStep, myOrderedMeals, infoAddress } =
    useContext(MainContext);
  /* Өмнөх алхамруу шилжих */

  const backButton = () => {
    setActiveStep(activeStep - 1);
  };

  const addressDetail = [
    infoAddress.city,
    infoAddress.district,
    infoAddress.khoroo,
    infoAddress.detail
  ];
  
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Stack direction={"row"}>
        <IconButton
          onClick={backButton}
          sx={{
            mx: 4,
            borderRadius: 2,
            border: "1px solid gray",
            width: 40,
            height: 40
          }}
        >
          <ArrowLeft />
        </IconButton>
        <Typography variant="h4" textAlign={"center"} mb={3}>
          Чи төлбөрөө төлөөгүй
        </Typography>
      </Stack>
      <Stack spacing={4} direction={"row"} sx={{ width: "100%" }}>
        <Box sx={{ flex: 1 }}>
          <Typography textAlign={"center"} mb={4} variant="h5">
            Таны захиалсан хоолнууд
          </Typography>
          {myOrderedMeals.map((order, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Avatar src={order.foodImage} />
              <Typography variant="h6">{order.foodName}</Typography>
              <Typography variant="h6">{order.price}₮</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography textAlign={"center"} mb={4} variant="h5">
            Таны хаяг
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 2
            }}
          >
            {addressDetail.map((el, id) => (
              <Typography
                key={id}
                variant="h6"
                textAlign={"center"}
                sx={{
                  border: "1px solid gray",
                  width: 250,
                  py: 2,
                  borderRadius: 2
                }}
              >
                {el}
              </Typography>
            ))}
          </Box>
        </Box>
      </Stack>
      <Button variant="outlined">Захиалах</Button>
    </Box>
  );
};
