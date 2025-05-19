import { useDispatch, useSelector } from "react-redux";
import s from "./cart.module.scss";
import { useEffect } from "react";
import { fetchCart } from "../../redux/slices/cartSlice";
import CartItem from "./CartItem";
import {
  selectTotalCount,
  selectSubtotal,
  selectDiscount,
  selectTotal,
} from "../../redux/selectors/cartSelectors";

export default function Cart() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const totalCount = useSelector(selectTotalCount);
  const subtotal = useSelector(selectSubtotal);
  const discount = useSelector(selectDiscount);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCart(user.firebaseId));
  }, [dispatch]);
  return (
    <section className={s.cart}>
      <div className='container'>
        <h1>Shopping Cart</h1>
        <div className={s.inner}>
          <section className={s.left}>
            <ul className={s.list}>
              {cart.map((el) => (
                <CartItem product={el} />
              ))}
            </ul>
          </section>
          <section className={s.right}>
            <h2 className={s.title}>Order Summary</h2>
            <ul className={s.numbers}>
              <li className={s.item}>
                <p className={s.label}>Subtotal</p>
                <p className={s.number}>${subtotal}</p>
              </li>
              <li className={s.item}>
                <p className={s.label}>Estimated Tax</p>
                <p className={s.number}>$50</p>
              </li>
              <li className={s.item}>
                <p className={s.label_const}>Estimated shipping & Handling</p>
                <p className={s.number}>$29</p>
              </li>
              <li className={s.item}>
                <p className={s.label_const}>Discount</p>
                <p className={s.number}>${discount}</p>
              </li>
              <li className={s.item}>
                <p className={s.label}>Total</p>
                <p className={s.number}>${total + 79}</p>
              </li>
              <li className={s.item}>
                <p className={s.label}>Number of products</p>
                <p className={s.number}>{totalCount} units</p>
              </li>
            </ul>
            <button className={s.button}>Checkout</button>
          </section>
        </div>
      </div>
    </section>
  );
}
