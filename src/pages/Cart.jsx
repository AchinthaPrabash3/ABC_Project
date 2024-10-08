/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import CartCard from "../components/CartItemCard";
import PageTop from "../components/PageTop";
import TrackOrders from "../components/TrackOrders";
import { LocationContext } from "../components/LocationContext";
import { SaveOrdersContext } from "../components/SaveToLocalContext";
import { LoginContext } from "../components/LoginContext";

const Cart = ({ data, setCart }) => {
  const locations = useContext(LocationContext);
  const { setSaveToLocal } = useContext(SaveOrdersContext);
  const { isLogedin, reseved } = useContext(LoginContext);
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderData, setorderData] = useState({
    items: [],
    total: 0,
    email: "",
    address: "",
    phone: "",
    location: "",
    completed: false,
    delivary: 300,
  });

  useEffect(() => {
    let sTotal = 0;
    for (let i = 0; i < data.length; i++) {
      sTotal += data[i].price * data[i].amount;
    }
    setSubtotal(sTotal);
    setTotal(sTotal + 300);
  }, [data]);

  useEffect(() => {
    setorderData((o) => {
      return {
        ...o,
        items: data,
        total: total,
      };
    });
  }, [data, total]);

  const getData = (e) => {
    const { name, value } = e.target;
    setorderData((o) => {
      return {
        ...o,
        [name]: value,
      };
    });
  };

  const updateUserInfo = async (prodId) => {
    if (isLogedin) {
      try {
        const res = await fetch("http://localhost:8080/upuserprod", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([reseved[0]._id, prodId]),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("m");
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (
      orderData.address !== "" &&
      orderData.email !== "" &&
      !(orderData.items <= 0) &&
      orderData.location !== "" &&
      orderData.phone !== "" &&
      orderData.total !== 0
    ) {
      try {
        const res = await fetch("http://localhost:8080/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        if (Object.keys(data).length > 0) {
          window.alert("order placed successfuly");
          setSaveToLocal((s) => {
            return [...s, data];
          });
          updateUserInfo(data._id);
          setorderData({
            items: [],
            total: 0,
            email: "",
            address: "",
            phone: "",
            location: "",
            completed: false,
            delivary: 300,
          });
          setCart([]);
          window.sessionStorage.removeItem("cartItems");
        } else {
          window.alert("somting went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("please fill the data");
    }
  };
  return (
    <>
      <PageTop name="cart" />
      <section className="flex justify-center space-x-10 p-3">
        <div className="h-[475px] w-[622px] overflow-hidden border border-gold p-4">
          <p className="font-cormorant text-2xl font-bold capitalize">cart</p>
          <div className="mt-5 h-full space-y-2 overflow-y-scroll pb-8">
            {data.map((cartItem, i) => (
              <CartCard key={i} {...cartItem} setCart={setCart} index={i} />
            ))}
          </div>
        </div>
        <div className="rounded-md bg-main p-3 text-white">
          <h1 className="font-cormorant text-xl uppercase tracking-wider">
            delovary info
          </h1>
          <form
            onSubmit={sendData}
            className="mt-3 flex w-[350px] flex-col space-y-2 [&_input]:h-12 [&_input]:border [&_input]:border-gold [&_input]:bg-transparent [&_input]:pl-2 [&_input]:placeholder:font-Josefin [&_input]:placeholder:capitalize"
          >
            <input
              type="email"
              name="email"
              value={orderData.email}
              onChange={getData}
              placeholder="email"
            />
            <input
              type="text"
              name="address"
              placeholder="address"
              onChange={getData}
              value={orderData.address}
            />
            <div className="flex space-x-2 *:w-1/2">
              <input
                type="text"
                name="phone"
                placeholder="phone number"
                value={orderData.phone}
                onChange={getData}
              />
              <select
                name="location"
                value={orderData.location}
                onChange={getData}
                className="border border-gold bg-transparent pl-2 font-Josefin capitalize"
              >
                <option value="">select</option>
                {locations.map((location, i) => (
                  <option value={location} key={i}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <hr className="mt-5" />
            <div className="space-y-2 py-2 pt-3">
              <div className="flex items-center justify-between space-x-2 px-1 *:font-Josefin">
                <h2 className="text-sm uppercase">item count</h2>
                <hr className="grow border-dashed border-white" />
                <p>{data.length}</p>
              </div>
              <div className="flex items-center justify-between space-x-2 px-1 *:font-Josefin">
                <h2 className="text-sm uppercase">sub total</h2>
                <hr className="grow border-dashed border-white" />
                <p>{subTotal}.Rs</p>
              </div>
              <div className="flex items-center justify-between space-x-2 px-1 *:font-Josefin">
                <h2 className="text-sm uppercase">dilivary fee</h2>
                <hr className="grow border-dashed border-white" />
                <p>300 Rs</p>
              </div>
            </div>
            <hr />
            <div className="my-5 flex items-center justify-between space-x-2 px-1 *:font-Josefin">
              <h2 className="text-sm uppercase">total</h2>
              <hr className="grow border-dashed border-white" />
              <p>{total} Rs</p>
            </div>
            <button
              className="block h-14 w-full rounded-md border border-gold font-Josefin capitalize"
              type="submit"
            >
              place order
            </button>
          </form>
        </div>
      </section>
      <section>
        <p className="mt-4 border-b border-gold py-3 text-center text-3xl uppercase">
          your orders
        </p>
        <div className="mx-auto w-[80%]">
          <TrackOrders />
        </div>
      </section>
    </>
  );
};
export default Cart;
