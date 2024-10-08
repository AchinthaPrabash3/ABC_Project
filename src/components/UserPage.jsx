/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import UserIcon from "../assets/Usericon.png";
import { data } from "autoprefixer";
import TrackOrderCard from "./TrackOrderCard";
import RserveCard from "./ReserveCard";
/* eslint-disable react/prop-types */
const UserPage = ({
  _id,
  email,
  username,
  address,
  location,
  setIslogedin,
  orders,
}) => {
  const [userorders, setUserOrders] = useState([]);
  const [userRes, setUserRes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/getuserorders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: _id,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setUserOrders(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getResData = async () => {
      try {
        const res = await fetch("http://localhost:8080/getuserres", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: _id,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setUserRes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    getResData();
  }, []);
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
      <div className="flex w-full flex-col gap-6 xl:flex-row">
        <div className="mb-4 w-1/2 rounded-md border border-gold p-4">
          <h2 className="mb-3 font-Josefin text-xl font-medium capitalize">
            user Orders
          </h2>
          {orders.length > 0 ? (
            <div className="flex h-[700px] flex-col gap-4 overflow-y-scroll">
              {userorders.map((data, i) => (
                <TrackOrderCard key={i} {...data} />
              ))}
            </div>
          ) : (
            <div className="grid h-[50dvh] w-full place-items-center">
              <h2 className="text-5xl font-bold uppercase text-slate-300">
                no orders yet
              </h2>
            </div>
          )}
        </div>
        <div className="mb-4 w-1/2 rounded-md border border-gold p-4">
          <h2 className="mb-3 font-Josefin text-xl font-medium capitalize">
            upcoming reservation
          </h2>
          {orders.length > 0 ? (
            <div className="flex h-[500px] flex-col gap-4 overflow-y-scroll">
              {userRes.map((data, i) => (
                <RserveCard key={i} {...data} />
              ))}
            </div>
          ) : (
            <div className="grid h-[50dvh] w-full place-items-center">
              <h2 className="text-5xl font-bold uppercase text-slate-300">
                no reservations yet
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default UserPage;
