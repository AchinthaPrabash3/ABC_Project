import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const StaffOrderStats = ({ pending, completed }) => {
  const [total, setTotal] = useState([]);
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < completed.length; i++) {
      total += completed[i].total;
    }
    setTotal(total);
  }, [completed]);
  return (
    <div className="flex justify-center gap-8 py-6 *:font-Josefin [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_h1]:rounded [&_h1]:border [&_h1]:border-gold [&_h1]:px-8 [&_h1]:py-2 [&_h1]:pt-4 [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:leading-none [&_p]:text-center">
      <div>
        <h1>{pending.length}</h1>
        <p>pending orders</p>
      </div>
      <div>
        <h1>{completed.length}</h1>
        <p>completed orders</p>
      </div>
      <div>
        <h1>{total}.Rs</h1>
        <p>total revanue</p>
      </div>
    </div>
  );
};
export default StaffOrderStats;
