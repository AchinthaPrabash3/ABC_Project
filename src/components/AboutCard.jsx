/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiBowlFood } from "react-icons/pi";

const AboutCard = ({ icon, title, des }) => {
  return (
    <div className="flex h-[200px] w-[70%] flex-col items-center justify-center text-white lg:w-[250px]">
      <div className="text-gold *:size-24 lg:*:size-16">{icon}</div>
      <h1 className="font-cormorant text-xl font-bold capitalize">{title}</h1>
      <p className="w-[200px] text-center text-xs">{des}</p>
    </div>
  );
};
export default AboutCard;
