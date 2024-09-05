import { useEffect, useState } from "react";

const UpdatePass = () => {
  const [reseved, setReseved] = useState([]);
  const [update, setUpdate] = useState({
    password: "",
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
    const { name, value } = e.target;
    setUpdate((u) => {
      return {
        ...u,
        [name]: value,
      };
    });
  };

  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/updatelocpass", {
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

  return (
    <div className="grow rounded-md border border-gold p-4">
      <p className="mb-2 font-thin capitalize">update password</p>

      <form onSubmit={add}>
        <div className="flex flex-col space-y-3 *:h-12 *:rounded-md *:border *:border-gold *:pl-2">
          <select name="_id" value={update._id} onChange={getData}>
            {reseved.map(({ _id, location, password }, i) => (
              <option value={_id} key={i}>
                {location}- {password}
              </option>
            ))}
          </select>

          <input
            required
            type="text"
            name="password"
            value={update.password}
            onChange={getData}
            placeholder="new password"
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
export default UpdatePass;
