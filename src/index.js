import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { CustomTheme } from "./utils/Theme";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
import { FirebaseProvider } from "./context/firebaseContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <MainProvider>
          <CustomTheme>
            <App />
          </CustomTheme>
        </MainProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
