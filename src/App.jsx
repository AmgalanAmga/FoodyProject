import React from "react";
import { Navbar } from "./components";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { AboutUs, MainPage, Menu, MenuMain, OrderHistory } from "./pages";
const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/menuMain" element={<MenuMain />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
