const Reserve = () => {
  const locations = ["galle", "matara", "gampaha", "columbo", "nuwara"];

  return (
    <section className="bg-formbg bg-cover">
      <div className="flex w-full items-center justify-center bg-main/50 py-[120px]">
        <div className="w-full rounded-lg bg-main/90 px-8 pb-12 pt-12 text-white shadow-xl backdrop-blur-sm md:w-fit md:pt-20 lg:px-12 xl:px-[156px] xl:pb-[121px]">
          <p className="mx-auto w-fit border-b border-t border-gold py-1 pt-2.5 text-center font-Josefin uppercase leading-none tracking-widest">
            reservation
          </p>
          <h4 className="mb-5 mt-2 text-center font-cormorant text-3xl capitalize">
            book your table now
          </h4>
          <form
            action=""
            className="space-y-4 [&_input]:h-[68px] [&_input]:border-2 [&_input]:bg-transparent [&_input]:pl-3 [&_input]:font-Josefin [&_input]:text-xl [&_input]:text-white [&_input]:placeholder:capitalize [&_input]:placeholder:text-white2"
          >
            <input
              required
              type="email"
              className="w-full lg:w-[744px]"
              placeholder="email"
            />
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:*:w-1/2">
              <input required type="text" placeholder="name" />
              <select
                name=""
                id=""
                className="h-[68px] border-2 border-white bg-transparent px-2 font-Josefin text-xl"
              >
                <option value="" defaultChecked>
                  select
                </option>
                {locations.map((location, i) => (
                  <option key={i} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full flex-col gap-4 stroke-white text-white *:w-1/2 md:flex-row [&_input]:w-full [&_input]:px-2">
              <input
                required
                type="number"
                placeholder="prople count"
                max="20"
              />
              <input required type="date" placeholder="date" />
              <input required type="time" placeholder="time" />
            </div>
            <textarea
              name=""
              id=""
              placeholder="spaecial reqrests"
              className="bg-transparent border-2 w-full h-[150px] resize-none p-3 text-white placeholder:capitalize placeholder:text-white2 font-Josefin text-xl"
            ></textarea>
            <button className="mx-auto block bg-white px-8 py-4 font-Josefin text-2xl text-black">
              reserve a table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Reserve;
