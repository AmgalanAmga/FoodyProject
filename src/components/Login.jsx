import { useContext, useRef } from "react";
import { MainContext } from "../context/MainContext";
import {
  Modal,
  Box,
  Button,
  Checkbox,
  TextField,
  FormGroup,
  IconButton,
  Typography,
  FormControlLabel
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAuthentication } from "../context/firebaseContext";

export const Login = () => {
  const {
    loginOpen,
    setLoginOpen,
    setRegisterOpen,
    userDetail,
    setUserDetail
  } = useContext(MainContext);
  const { loginWithEmail } = useAuthentication();
  const passwordRef = useRef();
  const mailOrPhoneRef = useRef();
  const jumpToRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };
  const handleClose = () => setLoginOpen(false);
  
  const handleSubmitWithEmail = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(
        mailOrPhoneRef.current.value,
        passwordRef.current.value
      );
      setUserDetail(user.user.email);
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
