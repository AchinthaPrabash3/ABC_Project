/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import RserveCard from "./ReserveCard";
import StaffOrderStats from "./StaffOrderStats";

/* eslint-disable react/prop-types */
const StaffPage = ({ setIsLogedinStaff }) => {
  const [orders, setOrders] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);
  const [m, setm] = useState([]);

  useEffect(() => {
    const data = window.sessionStorage.getItem("staffdata");
    try {
      const parsedData = JSON.parse(data);
      setm(Array.isArray(parsedData) ? parsedData : []);
    } catch (error) {
      console.error("Failed to parse staffdata:", error);
      setm([]);
    }
  }, []);
  useEffect(() => {
    setCompleted(orders.filter(({ completed }) => completed != false));
    setPending(orders.filter(({ completed }) => completed != true));
  }, [orders]);

  useEffect(() => {
    const getOrders = async (e) => {
      try {
        const res = await fetch("http://localhost:8080/stafforders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(m),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }

        if (data.length !== 0) {
          setOrders(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (m.length > 0) {
      getOrders();
    }
  }, [m]);

  useEffect(() => {
    const getReserves = async () => {
      try {
        const res = await fetch("http://localhost:8080/reserves", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: m[0],
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }

        setReserves(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (m.length > 0) {
      getReserves();
    }
  }, [m]);

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 border-main px-12 py-4">
        <div>
          <h1 className="font-Josefin text-4xl capitalize">
            branch: {m[0]} branch
          </h1>
          <p>ID: {m[1]}</p>
        </div>
        <button
          className="rounded-md bg-gold px-2 py-2"
          onClick={() => {
            setIsLogedinStaff(false);
            window.sessionStorage.removeItem("isLogedinStaff");
            window.sessionStorage.removeItem("staffdata");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8 rotate-180 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
      </div>{" "}
      <StaffOrderStats pending={pending} completed={completed} />
      <div className="mb-5 flex flex-col gap-5 px-3 pt-5 xl:flex-row">
        <div className="w-full rounded-md border border-gold p-2 xl:w-1/2">
          <h2 className="mb-4 font-Josefin text-xl capitalize">
            pending orders
          </h2>
          <div className="h-[600px] flex-none space-y-2 overflow-y-scroll pb-4">
            {orders.map((data, i) =>
              data.completed == false ? <OrderCard key={i} {...data} /> : "",
            )}
          </div>
        </div>
        <div className="w-full rounded-md border border-gold p-2 xl:w-1/2">
          <h2 className="mb-4 font-Josefin text-xl capitalize">
            today reservations
          </h2>
          <div className="h-[600px] flex-none space-y-2 overflow-y-scroll pb-4">
            {" "}
            {reserves.map((data, i) => (
              <RserveCard key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default StaffPage;
