import { useContext, useRef } from "react";
import { MainContext } from "../context/MainContext";
import {
  Modal,
  Box,
  Button,
  
  TextField,
  
  IconButton,
  Typography,
  
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAuthentication } from "../context/firebaseContext";

export const Login = () => {
  const {
    loginOpen,
    
    setLoginOpen,
    setIsLoggedIn,
    setUserDetail,
    setRegisterOpen
  } = useContext(MainContext);
  const { loginWithEmail } = useAuthentication();
  const passwordRef = useRef();
  const mailOrPhoneRef = useRef();

  /* Бүртгэх хэсэг нээгдэх */

  const jumpToRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  /* Нэвтрэх хэсэг хаах */

  const handleClose = () => setLoginOpen(false);

  /* Firebase-рүү хэрэглэгч нэвтрэх */

  const handleSubmitWithEmail = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(
        mailOrPhoneRef.current.value,
        passwordRef.current.value
      );
      setIsLoggedIn(true);
      setUserDetail({ email: user.user.email });
      setLoginOpen(false);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Буруу код засдаа 💢");
      }
    }
  };

  return (
    <Modal open={loginOpen} onClose={handleClose}>
      <Box
        sx={{
          p: 4,
          top: "50%",
          width: 600,
          left: "50%",
          boxShadow: 24,
          borderRadius: 4,
          position: "absolute",
          background: "#ffffff",
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
            Нэвтрэх
          </Typography>
          <form
            onSubmit={handleSubmitWithEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              inputRef={mailOrPhoneRef}
              type={"text"}
              label={"И-мэйл хаяг эсвэл утасны дугаар..."}
              variant="standard"
              sx={{ width: "350px" }}
            />
            <TextField
              inputRef={passwordRef}
              type={"password"}
              label={"Нууц үгээ оруулна уу..."}
              variant="standard"
              sx={{ width: "350px" }}
            />
            <Button type="submit" variant="contained" sx={{ px: 10, mt: 3 }}>
              Нэвтрэх
            </Button>
          </form>
          <Button onClick={jumpToRegister} sx={{ px: 5 }} variant="outlined">
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
