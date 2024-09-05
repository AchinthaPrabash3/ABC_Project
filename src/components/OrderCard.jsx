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
  return (
    <div className="w-[600px] rounded-md border border-main bg-white2 p-5">
      <div className="flex items-center justify-between">
        <p className="font-light">
          <span className="font-bold uppercase">ID</span>:{_id}
        </p>
        <p className={`${!completed ? "text-red-500" : ""} uppercase`}>
          {completed ? "completed" : "pending"}
        </p>
      </div>
      <div className="my-5 flex items-start justify-between [&_span]:pr-2 [&_span]:font-bold [&_span]:capitalize">
        <div>
          <p>
            <span>phone:</span>
            {phone}
          </p>
          <div className="flex">
            {" "}
            <span>address:</span>
            <p className="w-[150px]"> {address}</p>
          </div>
        </div>
        <p>
          <span>email:</span>
          {email}
        </p>
      </div>
      <div>
        {items.map(({ amount, price, name }, i) => (
          <div key={i} className="flex justify-between">
            <p>
              {" "}
              <span>name:</span> {name}
            </p>
            <p>
              {" "}
              <span>unit price</span> {price}
            </p>
            <p>
              {" "}
              <span>orderd units</span> {amount}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p>total:{total}</p>
        <button onClick={complete}>compleat</button>
      </div>
    </div>
  );
};
export default OrderCard;
