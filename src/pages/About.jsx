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
    "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      <section className="flex justify-center space-x-20 py-10">
        <div className="w-[400px]">
          <p className="w-fit border-b border-t border-gold px-2 pt-1 font-Josefin text-sm uppercase leading-none">
            about us
          </p>
          <h1 className="my-2 font-cormorant text-4xl font-bold capitalize">
            quality and tredition
          </h1>
          <p className="text-pretty text-sm">
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
          className="h-[500px] w-1/3 rounded-tr-[150px] object-cover"
          alt=""
        />
      </section>
      <section className="flex justify-center bg-aboutbg bg-cover bg-center">
        <div className="flex h-full w-full justify-center divide-x-2 divide-white bg-black/60 py-12 backdrop-blur-md">
          {aboutData.map((data, i) => {
            return <AboutCard key={i} {...data} />;
          })}
        </div>
      </section>
      <PageTop name="gallery" />
      <section className="mx-auto w-1/2 columns-4 space-y-2 py-8">
        {imageData.map((links, i) => (
          <img key={i} src={links} className="h-full w-full object-cover" />
        ))}
      </section>
      <Reserve />
    </>
  );
};
export default AboutPage;
