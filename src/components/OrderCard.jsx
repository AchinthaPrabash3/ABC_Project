/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const OrderCard = ({
  _id,
  total,
  delivary,
  email,
  items,
  phone,
  address,
  completed,
  location,
}) => {
  const complete = async (e) => {
    try {
      const res = await fetch("http://localhost:8080/update", {
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
    <div className="w-full rounded-md border border-main bg-main p-5 text-white">
      <div className="flex items-center justify-between">
        <p className="font-thin tracking-wide">
          <span className="font-bold uppercase">ID</span>:{_id} ({location})
        </p>
        <p
          className={`${!completed ? "text-red-500" : ""} rounded-md bg-white px-2 py-1 font-bold uppercase`}
        >
          {completed ? "completed" : "pending"}
        </p>
      </div>
      <div className="my-5 flex items-start justify-between *:font-thin [&_span]:pr-2 [&_span]:font-bold [&_span]:capitalize">
        <div>
          <p>
            <span>phone:</span>
            {phone}
          </p>
          <div className="flex">
            {" "}
            <span>address:</span>
            <p className="min-w-[150px]"> {address}</p>
          </div>
        </div>
        <p>
          <span>email:</span>
          {email}
        </p>
      </div>
      <div className="mb-4 space-y-2">
        {items.map(({ amount, price, name }, i) => (
          <div
            key={i}
            className="flex justify-between rounded-lg bg-white px-3 py-2 text-black"
          >
            <p>{name}</p>
            <div className="flex items-center gap-3">
              <p> {price} Rs</p>
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

              <p> {amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="flex items-center space-x-1 leading-none">
          {" "}
          <span className="pr-1 font-bold uppercase">total:</span> {total} ={" "}
          {total - 300}{" "}
          <span className="text-xs font-thin uppercase leading-none">
            + shipping(300)
          </span>
        </p>
        <div className="flex space-x-1">
          <button
            className="rounded-md bg-white px-2 py-2 uppercase text-green-400"
            onClick={() => {
              complete();
              window.location.reload();
            }}
          >
            delivered
          </button>
          <button
            className="rounded-md bg-white px-2 py-2 uppercase text-red-400"
            onClick={() => {
              deleteOrder();
              window.location.reload();
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
