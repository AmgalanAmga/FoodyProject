import { useState, useRef, useContext, useEffect } from "react";
import { provinces } from "../../utils/UsefulArrays";
import {
  Box,
  Stack,
  Button,
  TextField,
  IconButton,
  Typography,
  Autocomplete,
} from "@mui/material";
import { MainContext } from "../../context/MainContext";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";

export const InformationOfAddress = () => {
  const khorooRef = useRef();
  const detailRef = useRef();
  const [city, setCity] = useState("");
  const [soumValue, setSoumValue] = useState("");
  const { activeStep, setActiveStep } = useContext(MainContext);
  const [infoAddress, setInfoAddress] = useState({
    city: "",
    district: "",
    khoroo: "",
    detail: "",
  });
  const optionChange = (e, value) => {
    setCity(value);
    setSoumValue(value.soums);
  };
  const inputsChange = (e) => {
    const { id, value } = e.target;
    setInfoAddress({ ...infoAddress, [id]: value });
  };

  const clickContinue = () => {
    setInfoAddress({
      city: city.provinceName,
      district: soumValue,
      khoroo: khorooRef.current.value,
      detail: detailRef.current.value,
    });
    setActiveStep(activeStep + 1);
  };
  const backButton = () => {
    setActiveStep(activeStep - 1);
  };
  console.log(infoAddress);
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        minHeight: "90vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack direction={"row"}>
        <IconButton
          sx={{
            mx: 4,
            width: 40,
            height: 40,
            borderRadius: 2,
            border: "1px solid gray",
          }}
          onClick={backButton}
        >
          <ArrowLeft />
        </IconButton>
        <Typography variant="h5" mb={2}>
          Хүргэлтийн мэдээлэл
        </Typography>
        <IconButton
          onClick={clickContinue}
          disabled={infoAddress.detail === "" || infoAddress.khoroo === ""}
          sx={{
            mx: 4,
            borderRadius: 2,
            border: "1px solid gray",
            width: 40,
            height: 40,
          }}
        >
          <ArrowRight />
        </IconButton>
      </Stack>
      <Stack direction={"column"} spacing={2}>
        <Autocomplete
          disableClearable
          sx={{ width: 300 }}
          options={provinces}
          onChange={optionChange}
          getOptionLabel={(option) => option.provinceName}
          renderInput={(provinces) => (
            <TextField {...provinces} label="Хот/Аймаг" />
          )}
        />
        <Autocomplete
          sx={{ width: 300 }}
          onChange={optionChange}
          options={city.soums || []}
          renderInput={(soums) => <TextField {...soums} label="Дүүрэг/Сум" />}
        />
        <TextField
          id="khoroo"
          inputRef={khorooRef}
          onChange={inputsChange}
          type={"text"}
          autoComplete="off"
          label="Хороо..."
        />
        <TextField
          inputRef={detailRef}
          onChange={inputsChange}
          id="detail"
          type={"text"}
          autoComplete="off"
          label="Хаягийн нарийн мэдээлэл..."
        />

        <Button
          disabled={infoAddress.detail === "" || infoAddress.khoroo === ""}
          onClick={clickContinue}
          variant="contained"
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Box>
  );
};
