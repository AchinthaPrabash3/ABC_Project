/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import StaffPage from "../components/StaffPAge";

const StaffPanel = () => {
  const locations = ["galle", "matara", "gampaha", "columbo", "nuwara"];
  const [reseved, setReseved] = useState([]);
  const [isLogedinStaff, setIsLogedinStaff] = useState(false);
  const [staffLoginData, setStaffLoginData] = useState({
    location: "",
    password: "",
  });

  const getData = (e) => {
    const { name, type, value } = e.target;
    setStaffLoginData((s) => {
      return {
        ...s,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(staffLoginData),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        return;
      }
      if (data.length > 0) {
        setReseved(data);
        setIsLogedinStaff(true);
        setStaffLoginData({
          location: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const data = window.sessionStorage.getItem("isLogedinStaff");
    if (data !== null) {
      setIsLogedinStaff(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem("staffdata", JSON.stringify(reseved));
    }
  }, [reseved]);

  useEffect(() => {
    const userData = window.sessionStorage.getItem("staffData");
    if (userData !== null) {
      setReseved(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem(
        "isLogedinStaff",
        JSON.stringify(isLogedinStaff),
      );
    }
  }, [reseved, isLogedinStaff]);

  return (
    <>
      {isLogedinStaff == false ? (
        <div>
          <PageTop name="protected page" />
          <div className="mx-auto my-5 flex w-[450px] flex-col items-center rounded-md border border-gold p-4">
            <div className="mb-5 w-fit rounded-full border border-gold bg-white2 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <p className="w-[300px] text-center text-sm">
              This page is restricted to authorized staff only. Unauthorized
              access is prohibited and may result in disciplinary action.
            </p>
            <form
              onSubmit={sendData}
              className="mt-5 flex w-full flex-col space-y-3 text-center *:w-full *:items-center *:border *:border-gold *:pl-2 [&_input]:h-12 [&_select]:h-12"
            >
              <select
                name="location"
                value={staffLoginData.location}
                onChange={getData}
                className="font-Josefin"
              >
                <option value="">select</option>
                {locations.map((location, index) => (
                  <option value={location} key={index}>
                    {location}
                  </option>
                ))}
              </select>
              <input
                className="font-Josefin placeholder:capitalize"
                type="password"
                required
                name="password"
                value={staffLoginData.password}
                onChange={getData}
                placeholder="enter password"
              />
              <button
                type="submit"
                className="h-14 border-none bg-gold font-Josefin capitalize text-white"
              >
                login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <StaffPage setIsLogedinStaff={setIsLogedinStaff} />
      )}
      <Footer />
    </>
  );
};
export default StaffPanel;
