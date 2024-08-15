import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import NavBar from "../components/NavBar";
import PageTop from "../components/PageTop";
import Reserve from "../components/ReserveForm";
import SpacerImg from "../components/SpacerImg";
import { menudata } from "../data/DummyData";
const MenuPage = () => {
  return (
    <>
      <NavBar />
      <PageTop name="our menu" />
      <MenuCard {...menudata[0]} tags="starter" />
      <SpacerImg link="https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <MenuCard {...menudata[1]} tags="main" />
      <SpacerImg link="https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <MenuCard {...menudata[2]} tags="dessert" />
      <Reserve />
      <Footer />
    </>
  );
};
export default MenuPage;
