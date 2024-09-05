import { useEffect, useState } from "react";
import LocCard from "./LocCard";

const DeleteLocation = () => {
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
    <div className="ml-5 w-[300px] rounded-md border border-gold bg-white2 p-2">
      <p className="mb-2 font-thin capitalize">delete location</p>
      <div className="h-[250px] space-y-2 overflow-y-scroll">
        {reseved.map((data, i) => (
          <LocCard key={i} {...data} />
        ))}
      </div>
    </div>
  );
};
export default DeleteLocation;
