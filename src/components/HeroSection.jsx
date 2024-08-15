/* eslint-disable react/no-unescaped-entities */

import heroimg from "../assets/heroimg.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative flex flex-col overflow-hidden bg-main text-white md:flex-row md:space-x-8 lg:pl-10 lg:pt-12 xl:overflow-visible xl:pl-[73px]">
      <div className="flex w-full flex-col items-center space-y-6 py-8 md:block md:w-fit md:space-y-4 md:py-24 md:pl-5 lg:space-y-5 lg:pt-24 xl:space-y-[33px] xl:pb-[177px] xl:pt-[176px]">
        <h1 className="w-fit text-center font-cormorant text-5xl font-bold leading-extra-tight md:text-left lg:text-6xl lg:leading-tighter xl:text-7xl 2xl:text-9xl 2xl:leading-extra-tight">
          Welcome To <br /> ABC Restaurant
        </h1>
        <p className="px-3 text-center font-Josefin text-sm md:w-[270px] md:px-0 md:text-left md:text-xs lg:w-[360px] lg:text-sm xl:w-[400px] xl:text-xl 2xl:w-[576px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and{" "}
        </p>
        <div className="flex space-x-4 text-sm [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:rounded-md [&_button]:border-2 [&_button]:border-gold [&_button]:px-5 [&_button]:py-4 [&_button]:font-Josefin [&_button]:uppercase [&_button]:shadow-xl [&_button]:transition-all lg:[&_button]:px-9 xl:[&_button]:h-[70px] xl:[&_button]:text-xl 2xl:[&_button]:text-2xl">
          <Link to={"/shop"}>
            {" "}
            <button className="hover:scale-95">order now</button>
          </Link>
          <Link to="/reserve">
            <button className="hover:scale-95">reserve</button>
          </Link>
        </div>
      </div>

      <div className="relative flex flex-grow justify-center overflow-hidden pt-[80px] md:overflow-visible lg:pt-[40px]">
        <div className="relative z-10 h-[400px] w-[350px] self-end rounded-t-full bg-custom2 shadow-inner shadow-black lg:h-[500px] lg:w-[400px] xl:h-[763.84px] xl:w-[659px]">
          <img
            src={heroimg}
            alt=""
            className="absolute left-1/2 top-[23px] w-[300px] -translate-x-1/2 rounded-t-full object-cover shadow-xl shadow-black/40 lg:h-[500px] lg:w-[370px] xl:h-[766px] xl:w-[607px]"
          />
        </div>
        <div className="absolute bottom-4 z-0 flex size-[450px] items-center justify-center rounded-full border-4 border-white lg:bottom-5 lg:size-[550px] xl:bottom-0 xl:size-[883px]">
          <div className="size-[380px] rounded-full border-4 lg:size-[450px] xl:size-[707.77px]"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
