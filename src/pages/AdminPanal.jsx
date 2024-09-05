/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import AdminPage from "../components/AdminPage";

import PageTop from "../components/PageTop";

const AdminPanal = () => {
  const [isAdminLogedin, setIsAdminLogedin] = useState(false);
  const [adminPass, setAdminPass] = useState({
    password: "",
  });
  const getLoginData = (e) => {
    const { name, value } = e.target;
    setAdminPass((a) => {
      return {
        ...a,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    if (isAdminLogedin == true) {
      window.sessionStorage.setItem(
        "isAdminLogedin",
        JSON.stringify(isAdminLogedin),
      );
    }
  }, [isAdminLogedin]);

  useEffect(() => {
    const data = window.sessionStorage.getItem("isAdminLogedin");
    setIsAdminLogedin(JSON.parse(data));
  }, []);

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminPass),
      });
      const data = await res.json();
      setIsAdminLogedin(data);
      if (!res.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAdminLogedin == false ? (
        <div className="mx-auto my-5 flex w-[400px] flex-col items-center justify-center rounded-md border border-gold p-5">
          <div className="rounded-full border border-gold bg-white2 p-4">
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
          <p className="mb-5 mt-4 text-center font-Josefin text-sm">
            This page is intended for administrators only. Please ensure you
            have the correct permissions to access this content.
          </p>
          <form
            onSubmit={sendData}
            className="flex w-full flex-col items-center justify-center"
          >
            <input
              className="h-12 w-full flex-none rounded-md border border-gold text-center placeholder:font-Josefin placeholder:capitalize"
              required
              type="password"
              name="password"
              value={adminPass.password}
              onChange={getLoginData}
              placeholder="password"
            />
            <button
              type="submit"
              className="mt-4 h-14 w-full rounded-md bg-gold font-Josefin capitalize"
            >
              login
            </button>
          </form>
        </div>
      ) : (
        <AdminPage setIsAdminLogedin={setIsAdminLogedin} />
      )}
    </>
  );
};
export default AdminPanal;
