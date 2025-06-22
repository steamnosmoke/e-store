import s from "./cartItem.module.scss";
import { Link } from "react-router";
import {
  useMinusItem,
  usePlusItem,
  useRemoveFromCart,
} from "../../../hooks/useCart";

export default function CartItem({ product }) {
  const plusItem = usePlusItem();
  const minusItem = useMinusItem();
  const removeItem = useRemoveFromCart();
  return (
    <section className={s.cartItem}>
      <div className={s.inner}>
        <Link to={`/catalog/${product.category}/${product.productId}`}>
          <section className={s.left}>
            <img src={product.images[0]} alt='' />
            <h3 className={s.name}>
              {product.name},<br />
              {product.color},<br />
              {product.memory === 1 ? `1TB` : `${product.memory}GB`}
            </h3>
          </section>
        </Link>
        <section className={s.right}>
          <div className={s.control_count}>
            <button
              className={s.minus}
              onClick={() => minusItem.mutate(product)}
            >
              -
            </button>
            <span className={s.count}>{product.count}</span>
            <button className={s.plus} onClick={() => plusItem.mutate(product)}>
              +
            </button>
          </div>
          <p className={s.price}>${product.total}</p>
          <button
            className={s.remove}
            onClick={() => removeItem.mutate(product)}
          >
            X
          </button>
        </section>
      </div>
    </section>
  );
}
