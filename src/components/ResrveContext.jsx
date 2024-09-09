/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const SaveResContext = createContext();

export const SaveResProvider = ({ children }) => {
  const [savedReserves, setSavedReserves] = useState([]);
  useEffect(() => {
    const data = window.localStorage.getItem("Reservations");
    if (data !== null) {
      setSavedReserves(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (savedReserves.length !== 0) {
      window.localStorage.setItem(
        "Reservations",
        JSON.stringify(savedReserves),
      );
    }
  }, [savedReserves]);

  return (
    <SaveResContext.Provider value={{ savedReserves, setSavedReserves }}>
      {children}
    </SaveResContext.Provider>
  );
};
