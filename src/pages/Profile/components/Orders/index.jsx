import s from "./orders.module.scss";
import Order from "./Order";
import { usePage } from "../../../../hooks/usePage";
import MyLoader from "../../../../components/Products/Loader";

export default function Orders() {
  const { products, status } = usePage("orders");

  return (
    <section className={s.orders}>
      <h2 className={s.title}>Orders List</h2>
      {(() => {
        switch (status) {
          case "success":
            return products.length > 0 ? (
              products.map((order) => <Order key={order.id} order={order} />)
            ) : (
              <h1>No Products Found</h1>
            );

          case "pending":
            return Array.from({ length: 4 }).map((_, i) => (
              <MyLoader key={i} />
            ));

          case "error":
          default:
            return <h2>Something Went Wrong</h2>;
        }
      })()}
    </section>
  );
}
