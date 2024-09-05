import { useEffect, useState } from "react";

const LocationStats = () => {
  const [reseved, setReseved] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:8080/locdata");
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

  return (
    <div className="flex w-fit flex-col items-center">
      <h2 className="text-6xl font-bold">{reseved.length}</h2>
      <p className="text-sm capitalize">location count</p>
    </div>
  );
};
export default LocationStats;
