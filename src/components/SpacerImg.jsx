/* eslint-disable react/prop-types */
const SpacerImg = ({ link }) => {
  return (
    <section className="h-[400px] w-full lg:block hidden">
      <img src={link} alt="" className="h-full w-full object-cover" />
    </section>
  );
};

export default SpacerImg;
