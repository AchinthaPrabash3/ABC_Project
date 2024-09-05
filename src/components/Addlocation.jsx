import { useState } from "react";

const AddLocation = () => {
  const [newLocation, setNewLocation] = useState({
    location: "",
    password: "",
    seatCount: 0,
  });
  const getData = (e) => {
    const { name, value, type } = e.target;
    setNewLocation((n) => {
      return {
        ...n,
        [name]: type == "number" ? Number(value) : value,
      };
    });
  };

  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/addlocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocation),
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
        window.alert("this location allrady exsists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newLocation);
  return (
    <div className="w-[300px] rounded-md border border-gold bg-white2 p-3">
      <p className="mb-2 font-thin capitalize">add new location</p>
      <form
        onSubmit={add}
        className="flex flex-col space-y-3 *:border *:border-gold [&_input]:h-12 [&_input]:rounded-md [&_input]:pl-2 [&_input]:placeholder:capitalize"
      >
        <input
          required
          onChange={getData}
          value={newLocation.location}
          type="text"
          name="location"
          placeholder="location name"
        />
        <input
          required
          onChange={getData}
          value={newLocation.seatCount}
          type="number"
          name="seatCount"
          placeholder="seat count"
        />
        <input
          required
          onChange={getData}
          value={newLocation.password}
          type="text"
          name="password"
          placeholder="enter password"
        />
        <button
          type="submit"
          className="h-14 rounded-md bg-gold font-bold uppercase text-white"
        >
          add
        </button>
      </form>
    </div>
  );
};
export default AddLocation;
