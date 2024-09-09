import { useState } from "react";

const AddNewProd = () => {
  const [prodData, setProdData] = useState({
    name: "",
    price: 0,
    description: "",
    tag: "",
    img: "",
  });

  const getData = (e) => {
    const { name, value, type } = e.target;
    setProdData((p) => {
      return {
        ...p,
        [name]: type == "number" ? Number(value) : value,
      };
    });
  };
  const addProd = async (e) => {
    e.preventDefault();
    if (
      prodData.name !== "" &&
      prodData.description !== "" &&
      prodData.img !== "" &&
      prodData.price > 0 &&
      prodData.tag !== ""
    ) {
      try {
        const res = await fetch("http://localhost:8080/addnewproduct", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(prodData),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          console.log(data);
          return;
        }
        if (data) {
          window.alert("new product was added");
        } else {
          window.alert("somthing went wrong ");
        }
      } catch (error) {
        console.log(error);
      }
      console.log("m");
    }
  };
  console.log(prodData);
  return (
    <div className="max-w-[450px] flex-none grow rounded-md border border-gold bg-white2 p-4">
      <p className="mb-3 text-lg font-thin capitalize">add product</p>
      <form
        onSubmit={addProd}
        className="flex flex-col space-y-2 *:rounded *:border *:border-gold *:font-Josefin *:placeholder:font-Josefin [&_input]:h-12 [&_input]:pl-2 [&_select]:h-12 [&_select]:pl-2 [&_textarea]:pl-2"
      >
        <input
          required
          placeholder="product name"
          onChange={getData}
          value={prodData.name}
          type="text"
          name="name"
        />
        <div className="flex items-center border-none pl-0">
          <input
            required
            className="grow rounded border border-gold pl-2"
            placeholder="product price"
            onChange={getData}
            value={prodData.price}
            type="number"
            name="price"
          />
          <p className="w-fit px-3">Rs</p>
        </div>
        <textarea
          className="h-[100px] resize-none pt-2"
          required
          placeholder="product description"
          maxLength={50}
          onChange={getData}
          value={prodData.description}
          name="description"
        />
        <select onChange={getData} value={prodData.tag} name="tag">
          <option value="" defaultChecked>
            --select tag--
          </option>
          <option value="main">main</option>
          <option value="starter">starter</option>
          <option value="dessert">dessert</option>
        </select>
        <input
          required
          placeholder="product image url"
          onChange={getData}
          value={prodData.img}
          type="text"
          name="img"
        />
        <button
          type="submit"
          className="h-14 border-none bg-gold font-Josefin capitalize leading-none text-white"
        >
          add product
        </button>
      </form>
    </div>
  );
};
export default AddNewProd;
