/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import CartCard from "../components/CartItemCard";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";

const Cart = ({ data, setCart, setSaveToLocal }) => {
  const locations = ["galle", "matara", "gampaha", "columbo", "nuwara"];
  const [orderData, setorderData] = useState({
    items: [],
    total: 0,
    email: "",
    address: "",
    phone: "",
    location: "",
    delivary: 300,
  });
  const [subTotal, setSubtotal] = useState(100);
  const [total, setTotal] = useState(0);
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
        total: subTotal,
      };
    });
  }, [data, subTotal]);

  const getData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setorderData((o) => {
      return {
        ...o,
        [name]: value,
      };
    });
  };

  const sendData = async () => {
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

        if (data == true) {
          window.alert("order placed successfuly");
          setSaveToLocal((s) => {
            return [...s, orderData];
          });
          window.localStorage.setItem("orders", JSON.stringify(orderData));
          setorderData({
            items: [],
            total: 0,
            email: "",
            address: "",
            phone: "",
            location: "",
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
            action=""
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
          </form>
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
            onClick={sendData}
          >
            place order
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Cart;
