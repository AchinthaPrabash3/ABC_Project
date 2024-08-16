/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from "react";
import Footer from "../components/Footer";

import ItemCard from "../components/ItemCard";

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
        <div className="py-12 flex flex-col items-center">
          <h1 className="text-5xl uppercase font-cormorant font-bold mb-12">
            shop now
          </h1>
          <div className="h-12 border-2 py-1 border-gold w-1/2 flex items-center px-2 rounded-full overflow-hidden">
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
              className="grow h-full outline-none pl-2 font-Josefin placeholder:capitalize placeholder:text-lg"
            />
            <select
              onChange={filter}
              className="bg-main text-white h-full rounded-full px-3 capitalize font-cormorant text-lg"
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
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-fit gap-8 mx-auto py-10 pb-20">
          {products.map((data, i) => (
            <ItemCard setCart={setCart} key={i} {...data} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ShopPage;
