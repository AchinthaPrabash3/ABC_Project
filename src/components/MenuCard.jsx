/* eslint-disable react/prop-types */
const MenuCard = ({ type, items, tags, image }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 pb-[130px] lg:flex-row lg:items-start lg:py-[130px]">
      <div className="h-[500px] w-full lg:h-[600px] lg:w-[400px] 2xl:w-[553px]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>

      <div className="flex w-full flex-col px-8 pr-4 md:px-24 lg:w-[500px] lg:px-0 2xl:h-[700px] 2xl:w-[834px]">
        <h2 className="font-cormorant text-5xl font-bold capitalize">{type}</h2>
        <ul className="mt-5 h-[500px] grow space-y-4 overflow-y-scroll lg:space-y-8">
          {items.map(({ name, description, price, tag, img }, i) => {
            if (tag == tags) {
              return (
                <li
                  className="flex w-full items-center gap-4 transition-all hover:scale-95"
                  key={i}
                >
                  <img
                    className="size-16 rounded-full object-cover object-center 2xl:size-24"
                    src={img}
                    alt=""
                  />
                  <div className="w-full">
                    <h3 className="font-cormorant text-xl font-bold capitalize md:text-3xl 2xl:text-4xl">
                      {name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <p className="max-w-[150px] text-[10px] leading-none text-custom2 md:max-w-[200px] md:text-xs 2xl:max-w-[300px] 2xl:text-base">
                        {description}
                      </p>
                      <hr className="relative grow border-dashed border-black" />
                      <h4 className="font-cormorant text-lg font-bold leading-none md:text-2xl 2xl:text-3xl">
                        {price}.00 Rs
                      </h4>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};
export default MenuCard;
