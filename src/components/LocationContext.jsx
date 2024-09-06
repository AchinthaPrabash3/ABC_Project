/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

// Create the context
export const LocationContext = createContext();

// Create the provider component
export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const res = await fetch("http://localhost:8080/locations");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setLocations(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocations();
  }, []);

  return (
    <LocationContext.Provider value={locations}>
      {children}
    </LocationContext.Provider>
  );
};
