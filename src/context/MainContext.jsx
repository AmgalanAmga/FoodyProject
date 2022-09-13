import { createContext, useState } from "react";
export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [detailOpen, setDetailOpen] = useState(false);
  const [indicatorIdx, setIndicatorIdx] = useState(0);
  const [orderHisDetail, setOrderHisDetail] = useState({})
  const state = {
    dates,
    setDates,
    detailOpen,
    indicatorIdx,
    setDetailOpen,
    orderHisDetail,
    setIndicatorIdx,
    setOrderHisDetail
  };
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};
