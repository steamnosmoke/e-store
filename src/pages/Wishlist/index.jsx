import Products from "../../components/Products";
import { usePage } from "../../hooks/usePage";
import { useAuthStore } from "../../zustand/authStore";

export default function Wishlist() {
  const user = useAuthStore((state) => state.user);
  const { products, status } = usePage(user.firebaseId, "wishlist");
  return (
    <section>
      <div className='container'>
        <h1>WishList</h1>
        <Products products={products} status={status} />
      </div>
    </section>
  );
}
