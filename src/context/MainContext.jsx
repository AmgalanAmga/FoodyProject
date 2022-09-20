import { createContext, useState } from "react";
export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [userDetail, setUserDetail] = useState({
    email: "",
    name: "",
    image: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [dateSearch, setDateSearch] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [indicatorIdx, setIndicatorIdx] = useState(0);
  const [monthWeekDays, setMonthWeekdays] = useState([]);
  const [myOrderedMeals, setMyOrderedMeals] = useState([]);
  const [ordersInRange, setOrdersInRange] = useState([]);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [orderHisDetail, setOrderHisDetail] = useState({});
  const [foodCardDetailInfo, setFoodCardDetailInfo] = useState({});
  const [menuOrderDetailOpen, setMenuOrderDetailOpen] = useState(false);
  const state = {
    dates,
    setDates,
    loginOpen,
    userDetail,
    dateSearch,
    detailOpen,
    activeStep,
    isLoggedIn,
    setLoginOpen,
    registerOpen,
    indicatorIdx,
    setUserDetail,
    setDetailOpen,
    setDateSearch,
    setActiveStep,
    ordersInRange,
    monthWeekDays,
    setIsLoggedIn,
    orderHisDetail,
    myOrderedMeals,
    setIndicatorIdx,
    setRegisterOpen,
    setOrdersInRange,
    setMonthWeekdays,
    setOrderHisDetail,
    setMyOrderedMeals,
    foodCardDetailInfo,
    menuOrderDetailOpen,
    setFoodCardDetailInfo,
    setMenuOrderDetailOpen,
  };
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};
