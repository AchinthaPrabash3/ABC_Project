import { useEffect, useState } from "react";

const UpdateProd = () => {
  const [prod, setProd] = useState([]);
  const [updateData, setUpdateData] = useState({
    _id: "",
    updateProperty: "",
    newValue: "",
  });

  const getData = (e) => {
    const { name, value, type } = e.target;
    setUpdateData((u) => {
      return {
        ...u,
        [name]: type == "number" ? Number(value) : value,
      };
    });
  };

  useEffect(() => {
    const getAllProd = async () => {
      try {
        const res = await fetch("http://localhost:8080/getallprod");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setProd(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProd();
  }, []);

  const sendData = async (e) => {
    e.preventDefault();
    if (
      updateData._id !== "" &&
      updateData.newValue !== "" &&
      updateData.updateProperty !== ""
    ) {
      try {
        const res = await fetch("http://localhost:8080/updateprod", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            updateData._id,
            updateData.updateProperty,
            updateData.newValue,
          ]),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="ml-3 h-fit max-w-[300px] flex-none grow rounded-lg border border-gold bg-white2 p-4">
      <h2 className="mb-3 text-xl font-thin capitalize">update product</h2>
      <form
        onSubmit={sendData}
        className="flex flex-col space-y-2 *:pl-2 [&_input]:h-12 [&_input]:rounded [&_input]:border [&_input]:border-gold [&_select]:h-12 [&_select]:rounded [&_select]:border [&_select]:border-gold [&_select]:font-Josefin"
      >
        <select name="_id" value={updateData._id} onChange={getData} required>
          <option value="">--select product--</option>
          {prod.map(({ _id, name }, i) => (
            <option value={_id} key={i}>
              {name}
            </option>
          ))}
        </select>
        <select
          className="capitalize"
          required
          name="updateProperty"
          value={updateData.updateProperty}
          onChange={getData}
        >
          <option value="">--select update type--</option>
          <option value="name">prod name</option>
          <option value="price">prod price</option>
          <option value="description">prod description</option>
          <option value="tag">prod tag</option>
          <option value="img">prod image</option>
        </select>
        {updateData.updateProp == "" ? (
          ""
        ) : updateData.updateProperty == "name" ||
          updateData.updateProperty == "description" ||
          updateData.updateProperty == "img" ? (
          <input
            type="text"
            name="newValue"
            value={updateData.newValue}
            onChange={getData}
          />
        ) : updateData.updateProperty == "tag" ? (
          <select
            name="newValue"
            value={updateData.newValue}
            onChange={getData}
          >
            <option value="" defaultChecked>
              --select tag--
            </option>
            <option value="main">main</option>
            <option value="starter">starter</option>
            <option value="dessert">dessert</option>
          </select>
        ) : updateData.updateProperty == "price" ? (
          <input
            type="number"
            value={updateData.newValue}
            name="newValue"
            onChange={getData}
          />
        ) : (
          <div className="grid h-12 place-items-center rounded border border-gold font-Josefin text-sm">
            <p>select update type to enter value</p>
          </div>
        )}
        <button className="h-14 rounded-md bg-gold font-Josefin capitalize text-white">
          update
        </button>
      </form>
    </div>
  );
};
export default UpdateProd;
