import { useSelector } from "react-redux";
import Products from "../../components/Products";

export default function Wishlist() {

  const { wishlist, status } = useSelector((state) => state.wishlist);
  return (
    <section>
      <div className='container'>
        <h1>WishList</h1>
          <Products products={wishlist} status={status} />
      </div>
    </section>
  );
}
