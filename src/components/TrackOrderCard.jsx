/* eslint-disable no-unused-vars */

import { data } from "autoprefixer";

/* eslint-disable react/prop-types */
const TrackOrderCard = ({
  _id,
  total,
  delivary,
  email,
  items,
  phone,
  address,
  completed,
}) => {
  const deleteOrder = async (e) => {
    try {
      const res = await fetch("http://localhost:8080/cancelorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      const data = res.json();

      if (!res.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[600px] rounded-lg border border-gold bg-main p-4 text-white">
      <div className="flex items-center justify-between *:leading-none">
        <p className="font-Josefin text-lg font-thin">{email}</p>
        <p className="text-2xl font-bold uppercase">
          {completed ? "delivered" : "onthe way"}
        </p>
      </div>
      <p className="-mt-1 mb-4 text-xs">{address}</p>
      <div className="h-[120px] space-y-2 overflow-y-scroll pb-3">
        {items.map(({ name, price, amount }, i) => (
          <div
            key={i}
            className="flex justify-between rounded-md bg-white px-3 py-2 *:text-black"
          >
            <p>{name}</p>
            <div className="flex space-x-3">
              <p>{price}Rs</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <p>{amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-between">
        <p className="text-lg font-bold uppercase">
          {" "}
          <span className="font-Josefin font-thin">total:</span> {total}
        </p>
        {completed ? (
          ""
        ) : (
          <button
            onClick={() => {
              deleteOrder();
              window.location.reload();
            }}
            className="rounded-md bg-white px-2 py-1 text-lg capitalize text-black"
          >
            {" "}
            cancel{" "}
          </button>
        )}
      </div>
    </div>
  );
};
export default TrackOrderCard;
