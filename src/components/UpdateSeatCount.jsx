import { useEffect, useState } from "react";

const UpdateSeatCount = () => {
  const [reseved, setReseved] = useState([]);
  const [update, setUpdate] = useState({
    seatCount: 0,
    _id: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/locdata");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setReseved(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const getData = (e) => {
    const { name, value, type } = e.target;
    setUpdate((u) => {
      return {
        ...u,
        [name]: type == "number" ? Number(value) : value,
      };
    });
  };

  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/updatelocseats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
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
  console.log(update);
  return (
    <div className="grow rounded-md border border-gold p-4">
      <p className="mb-2 font-thin capitalize">update seat count</p>
      <form onSubmit={add}>
        <div className="flex flex-col space-y-3 *:h-12 *:rounded-md *:border *:border-gold *:pl-2">
          <select name="_id" value={update._id} onChange={getData}>
            {reseved.map(({ _id, location }, i) => (
              <option value={_id} key={i}>
                {location}
              </option>
            ))}
          </select>
          <input
            required
            type="number"
            name="seatCount"
            value={update.seatCount}
            onChange={getData}
            placeholder="new name"
          />
        </div>
        <button
          type="submit"
          className="mt-4 h-14 w-full rounded-md bg-gold uppercase text-white"
        >
          update
        </button>
      </form>
    </div>
  );
};
export default UpdateSeatCount;
