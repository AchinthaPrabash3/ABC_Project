/* eslint-disable react/jsx-key */
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const icons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaPinterest />,
  ];
  return (
    <section className="bg-main py-12" id="contacts">
      <ul className="flex items-center justify-center gap-8">
        {icons.map((data, i) => (
          <a href="#" key={i}>
            <li className="*:size-6 *:fill-white">{data}</li>
          </a>
        ))}
      </ul>
      <div className="mx-auto mb-20 mt-10 flex w-[700px] justify-between">
        <div>
          <h5 className="w-fit border-b border-t border-gold pb-1 pt-2.5 font-Josefin uppercase leading-none text-white">
            contact
          </h5>
          <ul className="mt-5 space-y-3 text-lg text-white [&_span]:text-gold">
            <li>0012 colombo,Sri lanka</li>
            <li>
              <span className="uppercase"> call </span> - 0762617446
            </li>
            <li className="text-gold">achinthaprabash3@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <h5 className="w-fit border-b border-t border-gold pb-1 pt-2.5 font-Josefin uppercase leading-none text-white">
            working hours
          </h5>
          <ul className="mt-5 space-y-3 text-right text-lg text-white [&_span]:text-gold">
            <li>
              <span className="capitalize">mon - fri:</span> 7.00am - 6.00pm
            </li>
            <li>
              <span className="capitalize">sat:</span> 7.00am - 6.00pm
            </li>
            <li>
              <span className="capitalize">sun:</span> 8.00am - 6.00pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white pl-12 pt-12">
        <p className="capitalize text-white/40">
          design and developed by{" "}
          <span className="uppercase text-gold/50">Achintha Prabasha</span>
        </p>
      </div>
    </section>
  );
};
export default Footer;
