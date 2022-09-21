import { createContext, useState } from "react";
export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [userDetail, setUserDetail] = useState({
    email: "",
    name: "",
    image: ""
  });
  const [activeStep, setActiveStep] = useState(0);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dateSearch, setDateSearch] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [indicatorIdx, setIndicatorIdx] = useState(0);
  const [ordersInRange, setOrdersInRange] = useState([]);
  const [monthWeekDays, setMonthWeekdays] = useState([]);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [myOrderedMeals, setMyOrderedMeals] = useState([]);
  const [orderHisDetail, setOrderHisDetail] = useState({});
  const [verifyPhoneNumber, setVerifyPhoneNumber] = useState("");
  const [foodCardDetailInfo, setFoodCardDetailInfo] = useState({});
  const [menuOrderDetailOpen, setMenuOrderDetailOpen] = useState(false);
  const [infoAddress, setInfoAddress] = useState({
    city: "",
    district: "",
    khoroo: "",
    detail: ""
  });
  const state = {
    dates,
    setDates,
    loginOpen,
    userDetail,
    dateSearch,
    detailOpen,
    activeStep,
    isLoggedIn,
    infoAddress,
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
    setInfoAddress,
    orderHisDetail,
    myOrderedMeals,
    setIndicatorIdx,
    setRegisterOpen,
    setOrdersInRange,
    setMonthWeekdays,
    verifyPhoneNumber,
    setOrderHisDetail,
    setMyOrderedMeals,
    foodCardDetailInfo,
    menuOrderDetailOpen,
    setVerifyPhoneNumber,
    setFoodCardDetailInfo,
    setMenuOrderDetailOpen
  };
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};
