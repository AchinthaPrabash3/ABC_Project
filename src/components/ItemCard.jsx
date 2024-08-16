/* eslint-disable react/prop-types */

import { useState } from "react";

const ItemCard = ({ name, img, price, description, setCart }) => {
  const [value, setValue] = useState(1);

  const add = (e) => {
    e.preventDefault();
    if (value < 10) {
      setValue((v) => v + 1);
    }
  };
  const remove = (e) => {
    e.preventDefault();
    if (value > 1) {
      setValue((v) => v - 1);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    setCart((d) => [
      ...d,
      {
        name: name,
        price: price,
        description: description,
        img: img,
        amount: value,
      },
    ]);
  };

  return (
    <div className="w-[300px] 2xl:w-[406px]">
      <img src={img} className="aspect-square w-full rounded-md" />
      <div className="mt-2 flex justify-between">
        <div className="*:leading-none">
          <h3 className="font-cormorant text-3xl font-semibold capitalize leading-none 2xl:text-4xl 2xl:leading-none">
            {name}
          </h3>
          <p className="font-cormorant text-xl font-bold leading-none text-custom2 2xl:text-2xl 2xl:leading-none">
            {price}.00 Rs
          </p>
          <p className="mt-4 w-[70%] text-xs text-custom2">{description}</p>
        </div>
        <form action="" className="flex flex-none flex-col">
          <div className="flex items-center gap-2 [&_svg]:size-6 2xl:[&_svg]:size-8">
            <button onClick={add}>
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
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            <div className="size-[30px] 2xl:size-[44px] rounded-md border-2 border-gold overflow-hidden grid place-items-center">
              <input
                value={value}
                readOnly
                type="number"
                min="1"
                max="10"
                className="w-fit leading-none bg-transparent text-center font-cormorant text-3xl font-bold uppercase outline-none cursor-pointer"
              />
            </div>
            <button onClick={remove}>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={addToCart}
            type="submit"
            className="mt-[15px] flex h-[56px] items-center justify-center rounded-md bg-main [&_svg]:size-8 2xl:[&_svg]:size-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
export default ItemCard;
