/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ItemCard from "../components/ItemCard";

const ShopPage = ({ setCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <div>
          <h1>shop now</h1>
          <div>
            <input type="text" name="" id="" />
            <select name="" id="">
              <option value="">starter</option>
              <option value="">main</option>
              <option value="">dessart</option>
            </select>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 w-fit gap-8 mx-auto">
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
