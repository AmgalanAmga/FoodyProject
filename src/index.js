import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { CustomTheme } from "./utils/Theme";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <CustomTheme>
          <App />
        </CustomTheme>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
