import Footer from "../components/Footer";
import PageTop from "../components/PageTop";
import reserveImg from "../assets/reserveimg.webp";
import resimg from "../assets/resimg.jpg";
import { useState } from "react";
import { LuTruck } from "react-icons/lu";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineHistory } from "react-icons/ai";

const ReservePage = () => {
  const locations = ["galle", "matara", "gampaha", "columbo", "nuwara"];
  const miniCardData = [
    { title: "fresh food", icon: <LiaPizzaSliceSolid /> },
    { title: "fast delivery", icon: <LuTruck /> },
    { title: "qulity maintain", icon: <CiCircleCheck /> },
    { title: "open all week", icon: <AiOutlineHistory /> },
  ];

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
    const { name, type, value } = e.target;
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

  return (
    <>
      <PageTop name="reserve" />
      <section className="flex justify-center space-x-20 py-6">
        <div className="">
          <p className="w-fit border-b border-t border-gold pb-0.5 pt-1.5 font-Josefin text-sm uppercase leading-none">
            reservation
          </p>
          <h1 className="mt-4 font-cormorant text-4xl capitalize">
            reserve your table now
          </h1>
          <p className="mb-4 mt-1 w-[300px] text-xs">
            The people, food and the prime locations make Rodich the perfect
            place good friends & family to come together and have great time.
          </p>
          <form
            action=""
            className="flex w-[480px] flex-col space-y-2 [&_input]:h-12 [&_input]:border-2 [&_input]:border-gold [&_input]:pl-2 [&_input]:font-Josefin [&_input]:placeholder:capitalize"
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              value={reserveData.email}
              onChange={getData}
            />
            <div className="flex space-x-2 *:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={getData}
                value={reserveData.name}
              />
              <select
                className="border-2 border-gold font-Josefin text-slate-400"
                name="location"
                onChange={getData}
                value={reserveData.location}
              >
                <option value="">select</option>
                {locations.map((loaction, i) => (
                  <option key={i} value={loaction}>
                    {loaction}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-2 *:w-1/2">
              <input
                type="number"
                placeholder="people count"
                name="peopleCount"
                value={reserveData.peopleCount}
                onChange={getData}
              />
              <input
                type="text"
                name="phone"
                placeholder="phone number"
                onChange={getData}
                value={reserveData.phone}
              />
            </div>
            <div className="flex space-x-2 *:w-1/2 *:text-slate-400">
              <input
                type="date"
                name="date"
                onChange={getData}
                value={reserveData.date}
              />
              <input
                type="time"
                name="time"
                onChange={getData}
                value={reserveData.time}
              />
            </div>
            <textarea
              placeholder="spaecial reqests"
              name="request"
              onChange={getData}
              value={reserveData.request}
              className="h-[150px] resize-none border-2 border-gold p-2 font-Josefin capitalize"
            />
          </form>
          <button
            className="mt-2 h-16 border-2 border-gold px-8 font-Josefin text-lg capitalize text-gold"
            onClick={sendData}
          >
            reserve the table
          </button>
        </div>
        <img src={reserveImg} className="h-[520px] w-1/3 object-cover" />
      </section>
      <section className="mb-10 mt-20 flex items-center justify-center space-x-20">
        <img src={resimg} alt="" className="aspect-square w-1/3" />
        <div>
          <p className="w-fit border-b border-t border-gold pb-1.5 pt-2.5 font-Josefin text-sm uppercase leading-none">
            why choose us
          </p>
          <h2 className="mb-2 mt-5 font-cormorant text-4xl capitalize">
            wy we are the best ?{" "}
          </h2>
          <p className="w-[480px] text-justify font-Josefin leading-tight">
            Bring the table winwin survival strateges ensure proactive the
            domination the end of the day going forward new normal that has
            evolved froms generation on the runway heading towards streamlined
            cloud solution generated content in real times will have multiple
            touchpoints.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {miniCardData.map(({ title, icon }, i) => (
              <div key={i} className="flex items-center space-x-2 px-4 py-2">
                <div
                  className={`${i == 1 ? "*:stroke-gold" : "*:fill-gold"} *:size-7`}
                >
                  {icon}
                </div>
                <p className="font-Josefin capitalize">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ReservePage;
