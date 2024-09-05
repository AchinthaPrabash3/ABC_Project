/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const LocCard = ({ _id, location, seatCount }) => {
  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/deleteLoc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: _id }),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        console.log(data);
        return;
      }
      if (data) {
        window.alert("location added successfully");
      } else {
        window.alert("somthing went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-md border border-main p-3 shadow-lg">
      <div className="flex space-x-1">
        <p className="font-bold capitalize">{location}</p>
        <span>:</span>
        <p className="font-thin"> {seatCount}seats</p>
      </div>
      <button
        onClick={add}
        className="rounded-md bg-red-500 px-2 py-1 capitalize text-white"
      >
        delete
      </button>
    </div>
  );
};
export default LocCard;
