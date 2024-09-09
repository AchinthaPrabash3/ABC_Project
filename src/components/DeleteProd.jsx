import { useState, useEffect } from "react";
import ProdDeleteCard from "./ProdDeleteCard";

const DeleteProd = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    const getAllProd = async () => {
      try {
        const res = await fetch("http://localhost:8080/getallprod");
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setProd(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProd();
  }, []);
  return (
    <div className="ml-4 grow rounded-md border border-gold p-4">
      <h2 className="mb-3 text-xl font-thin capitalize">delete products</h2>
      <div className="h-[400px] space-y-2 overflow-y-scroll">
        {prod.map((data, i) => (
          <ProdDeleteCard
            key={i}
            {...data}
            prod={prod}
            setProd={setProd}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};
export default DeleteProd;
