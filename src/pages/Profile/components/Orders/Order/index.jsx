import s from "./order.module.scss";
import OrderCard from "./OrderCard";

export default function Order({ order }) {
  return (
    <section className={s.order}>
      <h3 className={s.title}>Order by {order.date}</h3>
      <ul className={s.list}>
        {order.items.map((product) => (
          <OrderCard product={product} />
        ))}
      </ul>
      <div className={s.info}>
        <h2 className={s.title}>Order Summary</h2>
        <ul className={s.numbers}>
          <li className={s.item}>
            <p className={s.label}>Subtotal</p>
            <p className={s.number}>${order.totalPriceWithoutDiscount}</p>
          </li>
          <li className={s.item}>
            <p className={s.label}>Discount</p>
            <p className={s.number}>${order.totalDiscount}</p>
          </li>
          <li className={s.item}>
            <p className={s.label}>Total</p>
            <p className={s.number}>${order.totalPriceWithDiscount + 79}</p>
          </li>
          <li className={s.item}>
            <p className={s.label}>Number of products</p>
            <p className={s.number}>{order.value} units</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
