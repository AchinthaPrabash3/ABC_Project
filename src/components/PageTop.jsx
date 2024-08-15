/* eslint-disable react/prop-types */

const PageTop = (props) => {
  return (
    <section className="flex justify-center bg-main py-20">
      <div className="w-fit space-y-5 [&_hr]:border-4 [&_hr]:border-gold">
        <hr />
        <h1 className="font-cormorant text-4xl font-bold uppercase text-white md:text-6xl lg:text-8xl">
          {props.name}
        </h1>
        <hr />
      </div>
    </section>
  );
};
export default PageTop;
