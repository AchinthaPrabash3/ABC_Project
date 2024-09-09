/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [reseved, setReseved] = useState([]);
  const [isLogedin, setIslogedin] = useState(false);

  useEffect(() => {
    const data = window.sessionStorage.getItem("isLogedin");
    if (data !== null) {
      setIslogedin(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem("userData", JSON.stringify(reseved));
    }
  }, [reseved]);

  useEffect(() => {
    const userData = window.sessionStorage.getItem("userData");
    if (userData !== null) {
      setReseved(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem("isLogedin", JSON.stringify(isLogedin));
    }
  }, [reseved, isLogedin]);
  console.log(reseved, isLogedin);
  return (
    <LoginContext.Provider
      value={{ reseved, isLogedin, setIslogedin, setReseved }}
    >
      {children}
    </LoginContext.Provider>
  );
};
