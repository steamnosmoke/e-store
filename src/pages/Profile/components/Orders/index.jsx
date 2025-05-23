import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import s from "./orders.module.scss";
import Order from "./Order";
import { fetchOrders } from "../../../../redux/slices/orderSlice";

export default function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <section className={s.orders}>
      <h2 className={s.title}>Orders List</h2>
      {orders.length > 0
        ? orders.map((order) => <Order key={order.id} order={order} />)
        : <p>Заказов пока нет.</p>}
    </section>
  );
}
