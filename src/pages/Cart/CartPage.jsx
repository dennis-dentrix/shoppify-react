import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../Context";

export const CartPage = () => {
  const { cartList } = useCart();

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
