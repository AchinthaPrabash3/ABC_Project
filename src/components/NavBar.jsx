import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const NavData = ["menu", "shop", "reserve", "about"];
  const [visble, setVisble] = useState(false);
  const handleClick = () => {
    const navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("scale-y-0");
    setVisble((v) => !v);
  };
  return (
    <nav className="required: relative z-10 flex items-center justify-between border-b-4 border-gold bg-custom1 px-8 py-5 shadow-xl">
      <button
        className="z-10 block md:hidden"
        id="nav-btn"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ul
        className={`md:py-0" absolute left-0 top-[84px] flex ${visble ? "scale-y-100" : "scale-y-0"} w-fit flex-col justify-center space-y-4 bg-main px-7 py-5 md:visible md:static md:scale-y-100 md:flex-row md:items-center md:space-x-8 md:space-y-0 md:bg-transparent md:px-0`}
        id="nav-bar"
      >
        <Link to="/">
          <li
            className="relative cursor-pointer font-Josefin text-xl font-light uppercase leading-none text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-center before:scale-x-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:scale-x-100 md:text-base xl:text-xl"
            onClick={handleClick}
          >
            home
          </li>
        </Link>
        {NavData.map((data, i) => (
          <Link key={i} to={`/${data}`} onClick={handleClick}>
            <li
              key={i}
              className="relative cursor-pointer font-Josefin text-xl font-light uppercase leading-none text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-center before:scale-x-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:scale-x-100 md:text-base xl:text-xl"
            >
              {data}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex items-center space-x-3 text-white [&_svg]:size-7 lg:[&_svg]:size-7 xl:[&_svg]:size-[44px]">
        <Link to="/cart">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </Link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
