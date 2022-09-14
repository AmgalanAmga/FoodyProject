import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import foodyLogo from "../images/foodyLogo.png";
import {
  Tab,
  Tabs,
  Stack,
  Button,
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";
import { MainContext } from "../context/MainContext";
import { Register } from "./Register";
import { Login } from "./Login";
export const Navbar = () => {
  const { indicatorIdx, setIndicatorIdx, setRegisterOpen } =
    useContext(MainContext);
  const { pathname } = useLocation();
  const paramsArray = [
    {
      label: "Нүүр хуудас",
      path: "/"
    },
    {
      label: "Захиалгын түүх",
      path: "/orderHistory"
    },
    {
      label: "Хоолны цэс",
      path: "/menu"
    },
    {
      label: "Бидний тухай",
      path: "/aboutUs"
    }
  ];
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
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} style={{ alignItems: "center" }}>
            <Link to="/" onClick={() => setIndicatorIdx(0)}>
              <img src={foodyLogo} alt="" style={{ height: "40px" }} />
            </Link>
            <Typography variant="h3" sx={{ color: "#66B60F" }}>
              .
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Tabs
              value={indicatorIdx}
              textColor="primary"
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
            <Button
              variant="contained"
              onClick={registerOpenHandler}
              sx={{
                backgroundColor: "#66B60F",
                padding: "12px 55px",
                fontWeight: 700,
                fontSize: { sm: 14, md: 16 }
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Register />
      <Login/>
    </>
  );
};
