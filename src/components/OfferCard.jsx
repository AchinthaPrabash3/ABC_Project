/* eslint-disable react/prop-types */
const OfferCard = ({ icon, title }) => {
  return (
    <div className="flex size-[211px] flex-col items-center justify-center border-[23px] border-custom1 bg-main">
      <div className="*:size-14 *:fill-gold">{icon}</div>
      <p className="mt-1 font-cormorant text-xl capitalize text-white">
        {title}
      </p>
    </div>
  );
};
export default OfferCard;
