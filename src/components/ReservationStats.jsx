import { useEffect, useState } from "react";

const ReservationStats = () => {
  const [allRes, setAllRes] = useState([]);
  const [newRes, setNewRes] = useState([]);
  const [oldRes, setOldRes] = useState([]);
  useEffect(() => {
    const getAllReserves = async () => {
      try {
        const res = await fetch("http://localhost:8080/allreservations");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setAllRes(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getNewReserves = async () => {
      try {
        const res = await fetch("http://localhost:8080/newreservations");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setNewRes(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getOldReserves = async () => {
      try {
        const res = await fetch("http://localhost:8080/oldreservations");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setOldRes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllReserves();
    getNewReserves();
    getOldReserves();
  }, []);

  return (
    <div className="flex flex-grow space-x-8">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold">{allRes.length}</h2>
        <p className="text-sm capitalize">all Reservations</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold">{newRes.length}</h2>
        <p className="text-sm capitalize">new reservations</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold">{oldRes.length}</h2>
        <p className="text-sm capitalize">old reservations</p>
      </div>
    </div>
  );
};
export default ReservationStats;
