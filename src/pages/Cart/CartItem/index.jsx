import { useDispatch} from "react-redux";
import s from "./cartItem.module.scss";
import {
  minusItem,
  plusItem,
  removeFromCart,
} from "../../../redux/slices/cartSlice";
import { Link } from "react-router";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  return (
    <section className={s.cartItem}>
      <div className={s.inner}>
        <Link to={`/catalog/${product.category}/${product.productId}`}>
          <section className={s.left}>
            <img src={product.variant.images[0]} alt='' />
            <h3 className={s.name}>
              {product.name},<br />
              {product.variant.color},<br />
              {product.variant.memory}GB
            </h3>
          </section>
        </Link>
        <section className={s.right}>
          <div className={s.control_count}>
            <button
              className={s.minus}
              onClick={() => dispatch(minusItem(product))}
            >
              -
            </button>
            <span className={s.count}>{product.count}</span>
            <button
              className={s.plus}
              onClick={() => dispatch(plusItem(product))}
            >
              +
            </button>
          </div>
          <p className={s.price}>${product.total}</p>
          <button
            className={s.remove}
            onClick={() => dispatch(removeFromCart(product))}
          >
            X
          </button>
        </section>
      </div>
    </section>
  );
}
