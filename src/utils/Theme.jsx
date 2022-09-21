import { createTheme, ThemeProvider } from "@mui/material/styles";
const Theme = createTheme({
  shadows: {
    0: "none",
    1: "none"
  },
  palette: {
    primary: {
      light: "#75ce9f",
      main: "#66B60F",
      dark: "#01a66f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff"
    }
  }
});
export const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
