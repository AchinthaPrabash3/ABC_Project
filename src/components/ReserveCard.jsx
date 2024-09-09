/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const RserveCard = ({
  _id,
  email,
  name,
  location,
  phone,
  date,
  time,
  peopleCount,
  request,
}) => {
  const deleteReservation = async (e) => {
    try {
      const res = await fetch("http://localhost:8080/cancelres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full rounded-md border border-main bg-main p-5 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-thin tracking-wide">
            <span className="font-bold uppercase">ID</span>:{_id} ({location})
          </p>
          <p className="font-thin tracking-wide">
            <span className="pr-2 font-bold uppercase">name:</span>
            {name}
          </p>
        </div>
        <p
          className={`rounded-md bg-white px-2 py-1 font-bold capitalize text-red-500`}
        >
          {date} - at {time}
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
            <span>people count:</span>
            <p className="min-w-[150px]"> {peopleCount}</p>
          </div>
          <div className="flex">
            {" "}
            <span>special reqest:</span>
            <p className="min-w-[150px]">
              {" "}
              {request == "" || request == " " ? "no special reqest" : request}
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>email:</span>
            {email}
          </p>
        </div>
      </div>
      <button
        className="ml-auto block rounded-md bg-white px-2 py-2 uppercase text-red-400"
        onClick={() => {
          deleteReservation();
        }}
      >
        cancel
      </button>
    </div>
  );
};
export default RserveCard;
