/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiBowlFood } from "react-icons/pi";

const AboutCard = ({ icon, title, des }) => {
  return (
    <div className="w-[250px] h-[200px] flex flex-col items-center text-white justify-center">
      <div className="*:size-16 text-gold">{icon}</div>
      <h1 className="font-cormorant capitalize text-xl font-bold">{title}</h1>
      <p className="text-center text-xs w-[200px]">{des}</p>
    </div>
  );
};
export default AboutCard;
