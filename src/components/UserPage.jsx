/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import UserIcon from "../assets/Usericon.png";
/* eslint-disable react/prop-types */
const UserPage = ({
  email,
  username,
  address,
  location,
  setIslogedin,
  orders,
}) => {
  const claer = () => {
    window.sessionStorage.removeItem("userData");
  };
  return (
    <section className="space-y-2 px-12">
      <div className="flex items-center justify-between border-b-2 border-black px-12 py-3">
        <div className="flex items-center space-x-3">
          <div className="bg-white1 size-20 w-fit rounded-full border-2 border-gold p-1">
            <img src={UserIcon} className="size-full" alt="" />
          </div>
          <div className="-space-y-1">
            <h1 className="font-cormorant text-2xl font-bold capitalize">
              <span className="font-light">wellcome</span> {username}
            </h1>
            <p className="font-cormorant text-sm font-bold uppercase">
              {location}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setIslogedin((l) => !l);
              claer();
            }}
            className="rounded bg-gold p-2 *:stroke-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {orders.length > 0 ? (
          <div></div>
        ) : (
          <div className="grid h-[50dvh] w-full place-items-center">
            <h2 className="text-5xl font-bold uppercase text-slate-300">
              no orders yet
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};
export default UserPage;
