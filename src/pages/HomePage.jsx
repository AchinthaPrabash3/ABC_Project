/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ItemCard from "../components/ItemCard";
import OfferCard from "../components/OfferCard";
import Reserve from "../components/ReserveForm";

import { MdOutlineDeliveryDining, MdOutlineMenuBook } from "react-icons/md";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { useEffect, useState } from "react";

const HomePage = ({ setCart }) => {
  const [prod, setprod] = useState([]);
  const offersData = [
    { title: "open all week", icon: <LiaCalendarDaySolid /> },
    { title: "diverse menu", icon: <MdOutlineMenuBook /> },
    { title: "home delivery", icon: <MdOutlineDeliveryDining /> },
  ];
  useEffect(() => {
    const getAllProd = async () => {
      try {
        const res = await fetch("http://localhost:8080/getallprod");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setprod(data.filter((data) => data.tag == "main"));
      } catch (error) {
        console.log(error);
      }
    };
    getAllProd();
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <section className="pt-20 lg:pt-24 xl:pt-[140px]">
        <div className="flex flex-col items-center md:pb-12 xl:pb-[84px]">
          <h2 className="font-cormorant text-3xl uppercase leading-none lg:text-5xl xl:text-[64px]">
            populer dishes
          </h2>
          <p className="mt-2 w-1/2 text-center font-Josefin text-custom2 lg:w-[70%] lg:px-12 lg:text-2xl xl:w-1/2 xl:text-3xl">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        <div className="mx-auto grid w-fit place-content-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {prod.map((data, i) => {
            return i < 4 ? (
              <ItemCard key={i} {...data} setCart={setCart} />
            ) : (
              ""
            );
          })}
        </div>
        <Link to="/shop">
          <button className="mx-auto mt-[79px] block w-fit rounded-md border-4 border-gold px-[79px] py-5 font-cormorant text-3xl capitalize text-gold xl:h-[110px] xl:text-[40px]">
            see all dishes
          </button>
        </Link>
      </section>
      <section className="mt-[142px] flex flex-col items-center justify-center bg-main py-12 xl:flex-row xl:space-x-[130px] xl:py-[181px]">
        <div className="mb-12 flex flex-col items-center text-white xl:mb-0">
          <p className="w-fit border-b border-t border-gold pb-3 pt-4 font-Josefin text-[15px] uppercase leading-none tracking-wider xl:self-start">
            what we offer
          </p>
          <h3 className="mt-[19px] text-center font-cormorant text-5xl leading-none md:text-6xl">
            our great services
          </h3>
          <p className="mt-[20px] w-[400px] px-6 text-center font-Josefin text-sm leading-none md:px-0 md:text-lg xl:text-left">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.{" "}
          </p>
        </div>
        <div className="grid w-fit gap-[40px] md:grid-cols-3">
          {offersData.map((data, i) => (
            <OfferCard key={i} {...data} />
          ))}
        </div>
      </section>
      <Reserve />
    </div>
  );
};
export default HomePage;
