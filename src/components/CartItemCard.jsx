/* eslint-disable react/prop-types */
const CartCard = ({
  name,
  price,
  description,
  img,
  amount,
  setCart,
  index,
}) => {
  const manage = () => {
    setCart((c) => {
      return c.filter((_, i) => i != index);
    });
  };
  return (
    <div className="flex w-full justify-between rounded-md border border-main px-4 py-2">
      <div className="flex items-center space-x-3">
        <img src={img} alt="" className="size-14 rounded-full" />
        <div>
          <h1 className="font-cormorant text-xl font-bold">{name}</h1>
          <p className="w-[200px] font-Josefin text-xs leading-tighter">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <h2 className="mr-3 text-lg">{price}</h2>
        <p className="rounded-md border border-gold px-3 py-1">{amount}</p>
        <button className="ml-4" onClick={() => manage(index)}>
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CartCard;
