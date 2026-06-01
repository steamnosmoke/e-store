import Products from "../../components/Products";
import { usePage } from "../../hooks/usePage";

export default function Wishlist() {
  const { products, status } = usePage("wishlist");
  return (
    <section>
      <div className="container">
        <h1>WishList</h1>
        <Products products={products} status={status} />
      </div>
    </section>
  );
}
