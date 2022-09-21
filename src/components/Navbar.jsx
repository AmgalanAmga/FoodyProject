import { Login } from "./Login";
import { Register } from "./Register";
import { Logout } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import foodyLogo from "../images/foodyLogo.png";
import { paramsArray } from "../utils/UsefulArrays";
import { Link, useLocation } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import {
  Tab,
  Box,
  Tabs,
  Menu,
  Stack,
  Button,
  AppBar,
  Avatar,
  Tooltip,
  Toolbar,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon
} from "@mui/material";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    userDetail,
    isLoggedIn,
    indicatorIdx,
    setUserDetail,
    setIsLoggedIn,
    setIndicatorIdx,
    setRegisterOpen
  } = useContext(MainContext);
  const { pathname } = useLocation();

  /* Аль хуудас сонгогдсон бэ гэдгийг харуулах */

  useEffect(() => {
    paramsArray.forEach((el, index) => {
      if (el.path === pathname) return setIndicatorIdx(index);
    });
  }, [pathname]);

  const indicatorChange = (e, idx) => {
    setIndicatorIdx(idx);
  };

  const registerOpenHandler = (e) => {
    setRegisterOpen(true);
  };

  const menuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  const logOutHandle = (e) => {
    setUserDetail({});
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <Link to="/" onClick={() => setIndicatorIdx(0)}>
              <img src={foodyLogo} alt="" height={40} />
            </Link>
            <Typography variant="h3" sx={{ color: "#66B60F" }}>
              .
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Tabs
              textColor="primary"
              value={indicatorIdx}
              onChange={indicatorChange}
            >
              {paramsArray.map((el, idx) => (
                <Tab
                  key={idx}
                  label={el.label}
                  to={el.path}
                  component={Link}
                  sx={{ fontWeight: 500, fontSize: { sm: 13, md: 18 } }}
                />
              ))}
            </Tabs>
            {!isLoggedIn ? (
              <Button
                variant="contained"
                onClick={registerOpenHandler}
                sx={{
                  padding: "12px 55px",
                  fontWeight: 700,
                  fontSize: { sm: 14, md: 16 }
                }}
              >
                Бүртгүүлэх
              </Button>
            ) : (
              <Box>
                <Tooltip title="Профайл" arrow>
                  <IconButton onClick={menuClicked}>
                    <Avatar src={userDetail?.image}>
                      {userDetail.name?.charAt(0).toUpperCase() ||
                        userDetail.email?.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  open={menuOpen}
                  onClick={menuClicked}
                  onClose={menuClicked}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                >
                  <MenuItem onClick={logOutHandle}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Register />
      <Login />
    </>
  );
};
