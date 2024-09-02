import { useState } from "react";

const Reserve = () => {
  const locations = ["galle", "matara", "gampaha", "columbo", "nuwara"];
  const [reserveData, setReserveData] = useState({
    email: "",
    name: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    peopleCount: 1,
    request: "",
  });

  const getData = (e) => {
    const { name, value, type } = e.target;
    setReserveData((r) => {
      return {
        ...r,
        [name]: type == "number" ? Number(value) : value,
      };
    });
  };
  const sendData = async (e) => {
    e.preventDefault();
    if (
      reserveData.date !== "" &&
      reserveData.name !== "" &&
      reserveData.email !== "" &&
      reserveData.phone !== "" &&
      reserveData.time !== "" &&
      reserveData.location !== "select" &&
      reserveData.location !== "" &&
      !reserveData.peopleCount <= 0
    ) {
      try {
        const req = await fetch("http://localhost:8080/reserve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reserveData),
        });
        const data = await req.json();
        window.alert(data);
        if (!req.ok) {
          console.log(data);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("fill data");
    }
  };

  console.log(reserveData);
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
              name="email"
              value={reserveData.email}
              onChange={getData}
              className="w-full lg:w-[744px]"
              placeholder="email"
            />
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:*:w-1/2">
              <input
                required
                type="text"
                name="name"
                placeholder="name"
                value={reserveData.name}
                onChange={getData}
              />
              <select
                name="location"
                onChange={getData}
                value={reserveData.location}
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
                name="peopleCount"
                placeholder="prople count"
                onChange={getData}
                min="1"
                max="20"
              />
              <input
                type="text"
                name="phone"
                value={reserveData.phone}
                onChange={getData}
                placeholder="phone number"
              />
            </div>
            <div className="flex w-full flex-col gap-4 stroke-white text-white *:w-1/2 md:flex-row [&_input]:w-full [&_input]:px-2">
              <input
                required
                type="date"
                name="date"
                placeholder="date"
                value={reserveData.date}
                onChange={getData}
              />
              <input
                required
                type="time"
                name="time"
                placeholder="time"
                value={reserveData.time}
                onChange={getData}
              />
            </div>
            <textarea
              name="request"
              value={reserveData.request}
              onChange={getData}
              placeholder="spaecial reqrests"
              className="h-[150px] w-full resize-none border-2 bg-transparent p-3 font-Josefin text-xl text-white placeholder:capitalize placeholder:text-white2"
            ></textarea>
            <button
              className="mx-auto block bg-white px-8 py-4 font-Josefin text-2xl text-black"
              onClick={sendData}
            >
              reserve a table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Reserve;
