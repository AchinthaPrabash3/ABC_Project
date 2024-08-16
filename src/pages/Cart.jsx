import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";

/* eslint-disable react/prop-types */
const Cart = (props) => {
  let price = 0;
  for (let i = 0; i < props.data.length; i++) {
    price += props.data[i].price;
  }
  console.log(price);

  return (
    <>
      <ul>
        {props.data.map((data, i) => (
          <ItemCard {...data} key={i} />
        ))}
      </ul>
      <Footer />
    </>
  );
};
export default Cart;
