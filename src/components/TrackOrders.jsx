import { useEffect, useState } from "react";
import TrackOrderCard from "./TrackOrderCard";

const TrackOrders = () => {
  const [savedOrders, setSavedOrders] = useState([]);
  const [reseved, setReseved] = useState([]);
  useState(() => {
    const getSave = () => {
      const data = window.localStorage.getItem("orders");
      if (data !== null) {
        setSavedOrders(() => {
          const array = [];
          for (let i = 0; i < JSON.parse(data).length; i++) {
            array.push(JSON.parse(data)[i]._id);
          }
          return array;
        });
      }
    };
    getSave();
  }, []);

  useEffect(() => {
    const sendData = async () => {
      try {
        const res = await fetch("http://localhost:8080/trackorders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedOrders),
        });
        const data = await res.json();

        if (!res.ok) {
          console.log(data);
          return;
        }
        setReseved(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (savedOrders.length > 0) {
      sendData();
    }
  }, [savedOrders]);

  return (
    <div className="mx-auto my-4 grid w-fit grid-cols-2 gap-3">
      {reseved.map((data, i) => (
        <TrackOrderCard key={i} {...data} />
      ))}
    </div>
  );
};
export default TrackOrders;
