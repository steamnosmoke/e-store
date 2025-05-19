import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products";
import { useEffect } from "react";
import { fetchWishlist } from "../../redux/slices/wishlistSlice";
import s from "./wishlist.module.scss";

export default function Wishlist() {
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("user")).firebaseId;

  const { wishlist,status } = useSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(fetchWishlist(userId));
  }, [dispatch, userId]);

  return (
    <section>
      <div className='container'>
        <h1>WishList</h1>
        <div className={s.products}>
          <Products products={wishlist} status={status}/>
        </div>
      </div>
    </section>
  );
}
