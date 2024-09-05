/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const OrderStats = () => {
  const [reseved, setReseved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/allorders");
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
    getData();
  }, []);

  useEffect(() => {
    setCompleted(reseved.filter(({ completed }) => completed != false));
    setPending(reseved.filter(({ completed }) => completed != true));
    let total = 0;
    for (let i = 0; i < completed.length; i++) {
      total += completed[i].total;
    }
    setTotal(total);
  }, [reseved]);

  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">{reseved.length}</h2>
            <p className="text-sm capitalize">all orders</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-col items-center rounded border border-gold p-1">
              <h2 className="text-4xl font-bold">{completed.length}</h2>
              <p className="text-xs capitalize">completed </p>
            </div>
            <div className="flex flex-col items-center rounded border border-gold p-1">
              <h2 className="text-4xl font-bold">{pending.length}</h2>
              <p className="text-xs capitalize">pending </p>
            </div>
          </div>
        </div>
        <div className="ml-8">
          {" "}
          <p className="pl-1 capitalize">order revanue</p>
          <h2 className="text-4xl font-bold">
            {total.toLocaleString("en-US")} Rs
          </h2>
        </div>
      </div>
    </>
  );
};
export default OrderStats;
