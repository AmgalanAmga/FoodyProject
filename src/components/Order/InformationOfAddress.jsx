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
  const chosenOption = (e, value) => {
    setCity(value);
  };
  const choseSoumOption = (e, value) => {
    setSoumValue(value);
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
  useEffect(() => {}, []);
  console.log();
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        mt: 4,
        flexDirection: "column",
      }}
    >
      <Stack direction={"row"} sx={{width:500, background:"red"}}>
        <IconButton><ArrowLeft/></IconButton>
        <Typography variant="h5" mb={2}>
          Хүргэлтийн мэдээлэл
        </Typography>
        <IconButton><ArrowRight/></IconButton>
      </Stack>
      <Stack direction={"column"} spacing={2}>
        <Autocomplete
          disableClearable
          sx={{ width: 300 }}
          options={provinces}
          onChange={chosenOption}
          getOptionLabel={(option) => option.provinceName}
          renderInput={(provinces) => (
            <TextField {...provinces} label="Хот/Аймаг" />
          )}
        />
        <Autocomplete
          sx={{ width: 300 }}
          onChange={choseSoumOption}
          options={city.soums || []}
          renderInput={(soums) => <TextField {...soums} label="Дүүрэг/Сум" />}
        />
        <TextField
          inputRef={khorooRef}
          type={"text"}
          autoComplete="off"
          label="Хороо..."
        />
        <TextField
          inputRef={detailRef}
          type={"text"}
          autoComplete="off"
          label="Хаягийн нарийн мэдээлэл..."
        />
        <Stack direction={"row"} justifyContent="space-between">
          <Button variant="contained" onClick={backButton}>
            Буцах
          </Button>
          <Button
            disabled={!infoAddress}
            onClick={clickContinue}
            variant="contained"
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
