import s from "./orders.module.scss";
import Order from "./Order";
import { usePage } from "../../../../hooks/usePage";
import { useAuthStore } from "../../../../zustand/authStore";

export default function Orders() {
  const user = useAuthStore((state) => state.user);
  const { products, status, error } = usePage(user.firebaseId, "orders");

  return (
    <section className={s.orders}>
      <h2 className={s.title}>Orders List</h2>
      {products.length > 0 ? (
        products.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>Заказов пока нет.</p>
      )}
    </section>
  );
}
