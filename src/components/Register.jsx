import { useContext, useState, useRef } from "react";
import {
  Modal,
  Box,
  Button,
  Checkbox,
  TextField,
  IconButton,
  Typography,
  FormControlLabel
} from "@mui/material";
import {
  Mail,
  Close,
  RememberMe,
  PhoneIphone,
  MailOutline
} from "@mui/icons-material";
import { MainContext } from "../context/MainContext";
import { useAuthentication } from "../context/firebaseContext";
export const Register = () => {
  const passwordRef = useRef();
  const confirmCodeRef = useRef();
  const mailOrPhoneRef = useRef();
  const {
    registerWithEmail,
    registerWithPhone,
    verifyCodeSection,
    verifyMSGCode,
    
  } = useAuthentication();
  const { registerOpen, setRegisterOpen, setLoginOpen } =
    useContext(MainContext);
  const [registerType, setRegisterType] = useState(
    "И-мэйл хаягаа оруулна уу..."
  );
  const [isChecked, setIsChecked] = useState({
    email: true,
    phoneNumber: false
  });
  const handleClose = () => setRegisterOpen(false);

  /* Утасны дугаараар эсвэл имэйл хаягаар бүртгүүлэх */

  const registerTypeHandler = (e) => {
    const { id, checked } = e.target;
    if (id === "email") {
      setRegisterType("И-мэйл хаягаа оруулна уу...");
      setIsChecked({ email: checked, phoneNumber: false });
    } else {
      setRegisterType("Утасны дугаараа оруулна уу...");
      setIsChecked({ email: false, phoneNumber: checked });
    }
  };

  /* Имэйл хаягаар firebase-д бүртгэх */

  const handleSubmitWithEmail = async (e) => {
    e.preventDefault();
    try {
      // emailLinkAuth(mailOrPhoneRef.current.value)
      await registerWithEmail(
        mailOrPhoneRef.current.value,
        passwordRef.current.value
      );
      alert("Хэрэглэгч бүртгэгдлээ 😃");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Бүртгэлтэй хэрэглэгч байна 😡");
      }
    }
    mailOrPhoneRef.current.value = "";
    passwordRef.current.value = "";
  };

  /* Утасны дугаараар firebase-д бүртгэх */

  const handleSubmitWithNumber = async (e) => {
    e.preventDefault();
    if (verifyCodeSection) {
      verifyMSGCode(confirmCodeRef.current.value);
      mailOrPhoneRef.current.value = "";
      confirmCodeRef.current.value = "";
    } else {
      try {
        await registerWithPhone(mailOrPhoneRef.current.value);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Бүртгэлтэй хэрэглэгч байна 😡");
        }
      }
    }
    setRegisterOpen(false);
  };

  /* Бүртгэлтэй бол нэвтрэх хэсэгрүү үсрэх */

  const jumpToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <Modal open={registerOpen} onClose={handleClose}>
      <Box
        sx={{
          p: 4,
          top: "50%",
          width: 600,
          left: "50%",
          boxShadow: 24,
          borderRadius: 4,
          background: "#ffffff",
          position: "absolute",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "-10px", right: "0" }}
          >
            <Close color="primary" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: 1
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Бүртгүүлэх
          </Typography>
          <Typography variant="p">
            Та утасны дугаараараа эсвэл И-мэйл хаягаараа бүртгүүлнэ үү?
          </Typography>
          <Box sx={{ display: "flex", columnGap: 5 }}>
            <FormControlLabel
              onChange={registerTypeHandler}
              control={
                <Checkbox
                  icon={<MailOutline />}
                  checkedIcon={<Mail />}
                  checked={isChecked.email}
                  id="email"
                />
              }
              label="И-мэйл"
            />
            <FormControlLabel
              onChange={registerTypeHandler}
              control={
                <Checkbox
                  icon={<PhoneIphone />}
                  checkedIcon={<RememberMe />}
                  checked={isChecked.phoneNumber}
                  id="phoneNumber"
                />
              }
              label="Гар утас"
            />
          </Box>
          <form
            onSubmit={
              isChecked.email ? handleSubmitWithEmail : handleSubmitWithNumber
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              inputRef={mailOrPhoneRef}
              type={"text"}
              label={registerType}
              variant="standard"
              sx={{ width: "350px" }}
            />
            {isChecked.email ? (
              <TextField
                inputRef={passwordRef}
                type={"password"}
                label="Нууц үгээ оруулна уу..."
                variant="standard"
                sx={{ width: "350px" }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: 2
                }}
              >
                <Box id="recaptcha-container"></Box>
                {verifyCodeSection && (
                  <TextField
                    inputRef={confirmCodeRef}
                    type={"text"}
                    label={"Баталгаажуулах код..."}
                  />
                )}
              </Box>
            )}
            <Button type="submit" variant="contained" sx={{ px: 10, mt: 3 }}>
              {isChecked.email ? "Бүртгүүлэх" : "Баталгаажуулах код илгээх"}
            </Button>
          </form>
          <Button onClick={jumpToLogin} sx={{ px: 5 }} variant="outlined">
            Нэвтрэх
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
