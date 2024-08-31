import cart  from "../assets/cart.png";
import { Link } from "react-router-dom";

export const CartWidget = ()=> {
  return (
    <Link to="/Cart">
      <img src={cart} height={20} />4
    </Link>
    );
};