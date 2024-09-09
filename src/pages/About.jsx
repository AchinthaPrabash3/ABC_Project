import PageTop from "../components/PageTop";
import aboutHero from "../assets/aboutHero.jpg";
import AboutCard from "../components/AboutCard";
import { PiBowlFood } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
import Reserve from "../components/ReserveForm";

const AboutPage = () => {
  const imageData = [
    "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const aboutData = [
    {
      title: "fresh product",
      icon: <PiBowlFood />,
      des: "Professional consider everyone probls small niche friendly.",
    },
    {
      title: "skilled chefs",
      icon: <LuChefHat />,
      des: "Professional consider everyone probls small niche friendly.",
    },
    {
      title: "drinks & juices",
      icon: <BiDrink />,
      des: "Professional consider everyone probls small niche friendly.",
    },
    {
      title: "vegan cuisine",
      icon: <PiBowlFood />,
      des: "Professional consider everyone probls small niche friendly.",
    },
  ];
  return (
    <>
      <PageTop name="about us" />
      <section className="flex flex-col-reverse items-center justify-center gap-5 py-10 lg:flex-row lg:space-x-20">
        <div className="flex flex-col items-center lg:w-[400px] lg:items-start">
          <p className="w-fit border-b border-t border-gold px-2 pt-1 font-Josefin text-sm uppercase leading-none">
            about us
          </p>
          <h1 className="my-2 font-cormorant text-4xl font-bold capitalize">
            quality and tredition
          </h1>
          <p className="text-pretty px-12 text-center text-sm lg:px-0 lg:text-left">
            At ABC Restaurant, we bring together the finest ingredients and
            time-honored recipes to create an unforgettable dining experience.
            Our menu is a testament to the rich culinary traditions that have
            been passed down through generations, carefully curated to offer
            both classic favorites and innovative dishes. From the warm,
            inviting atmosphere to the impeccable service, every detail at ABC
            Restaurant reflects our commitment to quality and tradition. Whether
            you’re joining us for a casual meal or a special occasion, we invite
            you to savor the flavors and experience the heritage that make ABC
            Restaurant a beloved destination for food lovers.
          </p>
        </div>
        <img
          src={aboutHero}
          className="h-[300px] w-[90%] rounded-br-[150px] object-cover lg:h-[500px] lg:w-1/3 lg:rounded-tr-[150px]"
          alt=""
        />
      </section>
      <section className="flex justify-center bg-aboutbg bg-cover bg-center">
        <div className="flex h-full w-full flex-col items-center justify-center divide-y-2 divide-white bg-black/60 py-12 backdrop-blur-md lg:flex-row lg:divide-x-2 lg:divide-y-0">
          {aboutData.map((data, i) => {
            return <AboutCard key={i} {...data} />;
          })}
        </div>
      </section>
      <PageTop name="gallery" />
      <section className="mx-auto w-[80%] columns-2 space-y-2 py-8 lg:columns-4">
        {imageData.map((links, i) => (
          <img
            key={i}
            src={links}
            className="h-full w-full rounded-md object-cover"
          />
        ))}
      </section>
      <Reserve />
    </>
  );
};
export default AboutPage;
