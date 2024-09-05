/* eslint-disable no-unused-vars */

import MenuCard from "../components/MenuCard";
import NavBar from "../components/NavBar";
import PageTop from "../components/PageTop";
import Reserve from "../components/ReserveForm";
import SpacerImg from "../components/SpacerImg";
import { menudata } from "../data/DummyData";
import { useEffect, useState } from "react";
const MenuPage = () => {
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
      <PageTop name="our menu" />
      <MenuCard
        items={products}
        image="https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=600"
        tags="starter"
      />
      <SpacerImg link="https://assets.unileversolutions.com/v1/79598556.jpg" />
      <MenuCard
        items={products}
        image="https://images.pexels.com/photos/23897672/pexels-photo-23897672/free-photo-of-curry-chicken-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=600"
        tags="main"
      />
      <SpacerImg link="https://assets.epicurious.com/photos/62d6c513077a952f4a8c338c/16:9/w_4039,h_2272,c_limit/PannaCotta_RECIPE_04142022_9822_final.jpg" />
      <MenuCard
        items={products}
        image="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600"
        tags="dessert"
      />
      <Reserve />
    </>
  );
};
export default MenuPage;
