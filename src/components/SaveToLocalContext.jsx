/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const SaveOrdersContext = createContext();

export const SaveOrdersProvider = ({ children }) => {
  const [saveToLocal, setSaveToLocal] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("orders");
    if (data !== null) {
      setSaveToLocal(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (saveToLocal.length !== 0) {
      window.localStorage.setItem("orders", JSON.stringify(saveToLocal));
    }
  }, [saveToLocal]);

  return (
    <SaveOrdersContext.Provider value={{ saveToLocal, setSaveToLocal }}>
      {children}
    </SaveOrdersContext.Provider>
  );
};
