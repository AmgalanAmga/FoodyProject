import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { CustomTheme } from "./utils/Theme";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
import { FirebaseProvider } from "./context/firebaseContext";
import { FirestoreProvider } from "./context/FirestoreContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirestoreProvider>
        <FirebaseProvider>
          <MainProvider>
            <CustomTheme>
              <App />
            </CustomTheme>
          </MainProvider>
        </FirebaseProvider>
      </FirestoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
