/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from "react";

import ItemCard from "../components/ItemCard";
import Reserve from "../components/ReserveForm";

const ShopPage = ({ setCart }) => {
  const id = useId();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        const data = await res.json();
        if (filters == "main") {
          setProducts(data.filter((data) => data.tag == filters));
        } else if (filters == "dessert") {
          setProducts(data.filter((data) => data.tag == filters));
        } else if (filters == "starter") {
          setProducts(data.filter((data) => data.tag == filters));
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (search.length == 0) getData();
  }, [search, filters]);

  const getSearchValue = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const searches = (e) => {
    if (e.key == "Enter") {
      const reg = new RegExp(search, "gi");
      let filterd;
      if (filters == "price") {
        filterd = products.filter((data) => search == data.price);
      } else {
        filterd = products.filter((data) => reg.test(data.name));
      }
      setProducts(filterd);
    }
  };
  const filter = (e) => {
    setFilters(e.target.value);
  };
  return (
    <>
      <section>
        <div className="flex flex-col items-center py-12">
          <h1 className="mb-12 font-cormorant text-5xl font-bold uppercase">
            shop now
          </h1>
          <div className="flex h-12 w-1/2 items-center overflow-hidden rounded-full border-2 border-gold px-2 py-1">
            <label htmlFor={id + "search"}>
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </label>
            <input
              placeholder="search for goodness"
              onChange={getSearchValue}
              onKeyDown={searches}
              type="search"
              value={search}
              id={id + "search"}
              className="h-full grow pl-2 font-Josefin outline-none placeholder:text-lg placeholder:capitalize"
            />
            <select
              onChange={filter}
              className="h-full rounded-full bg-main px-3 font-cormorant text-lg capitalize text-white"
            >
              <option value="all" defaultChecked>
                all
              </option>
              <option value="starter">starter</option>
              <option value="main">main</option>
              <option value="dessert">dessart</option>
              <option value="price">price</option>
            </select>
          </div>
        </div>
        <div className="mx-auto grid w-fit grid-cols-2 gap-8 py-10 pb-20 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((data, i) => (
            <ItemCard setCart={setCart} key={i} {...data} />
          ))}
        </div>
      </section>
      <Reserve />
    </>
  );
};
export default ShopPage;
