import { useEffect } from "react";
import LocationStats from "./LocationStats";
import OrderStats from "./OrderStats";
import ReservationStats from "./ReservationStats";
import AddLocation from "./Addlocation";
import DeleteLocation from "./DeleteLoc";
import UpLocName from "./UpdateLocationName";
import UpdateSeatCount from "./UpdateSeatCount";
import UpdatePass from "./UpdatePassword";
import AddNewProd from "./AddNewProd";
import UpdateProd from "./UpdateProd";
import DeleteProd from "./DeleteProd";

/* eslint-disable react/prop-types */
const AdminPage = ({ setIsAdminLogedin }) => {
  useEffect(() => {
    const data = window.sessionStorage.getItem("isAdminLogedin");
    setIsAdminLogedin(JSON.parse(data));
  });
  return (
    <div>
      <div className="mb-5 flex items-center justify-between border-b border-black px-8 py-6">
        <h1 className="font-Josefin text-3xl font-bold capitalize">
          admin panal
        </h1>
        <button
          className="rounded-md bg-gold px-2 py-3"
          onClick={() => {
            setIsAdminLogedin(false);
            window.sessionStorage.setItem(
              "isAdminLogedin",
              JSON.stringify(false),
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 rotate-180 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
      </div>
      <section className="flex-c mx-auto mb-3 flex w-[90%] items-center justify-center space-x-8 rounded-md border border-gold bg-white2 p-4">
        <div>
          <p>location/orders stats</p>
          <div className="flex items-center space-x-8 border-r border-black pr-7">
            <LocationStats />
            <OrderStats />
          </div>
        </div>
        <div>
          <p className="capitalize">reservation ststs</p>
          <ReservationStats />
        </div>
      </section>
      <section className="mb-12 w-full px-16">
        <h2 className="mb-2 text-center text-xl capitalize">
          manage location data
        </h2>
        <div className="flex w-full">
          <div className="flex grow *:w-1/2">
            <AddLocation />
            <DeleteLocation />
          </div>
          <div className="ml-4 flex grow space-x-5">
            <UpLocName />
            <UpdateSeatCount />
            <UpdatePass />
          </div>
        </div>
      </section>
      <section className="px-16">
        <h2 className="text-center text-xl font-bold capitalize">
          manage products
        </h2>
        <div className="mb-4 mt-4 flex">
          <AddNewProd />
          <UpdateProd />
          <DeleteProd />
        </div>
      </section>
    </div>
  );
};
export default AdminPage;
