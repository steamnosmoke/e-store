import s from "./cart.module.scss";
import CartItem from "./CartItem";
import { usePage } from "../../hooks/usePage";
import { useCartStore } from "../../zustand/cartStore";
import { useEffect } from "react";
import { useMakeOrder } from "../../hooks/useCart";
import { useAuthStore } from "../../zustand/authStore";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const user = useAuthStore((state) => state.user);
  const { products, status } = usePage(user.firebaseId, "cart");
  const calcNumbers = useCartStore((state) => state.calcNumbers);
  const subtotal = useCartStore((state) => state.subtotal);
  const discount = useCartStore((state) => state.discount);
  const total = useCartStore((state) => state.total);
  const count = useCartStore((state) => state.count);
  const makeOrder = useMakeOrder();

  useEffect(() => {
    calcNumbers(products);
  }, [calcNumbers, products]);

  return (
    <section className={s.cart}>
      <div className='container'>
        {products.length > 0 && <h1 style={{marginBottom:"20px"}}>Shopping Cart</h1>}
        {products.length > 0 ? (
          <div className={s.inner}>
            {status === "success" ? (
              <>
                <section className={s.left}>
                  <ul className={s.list}>
                    {products.map((el) => (
                      <CartItem product={el} key={el.objectId} />
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
                      <p className={s.label_const}>Estimated Tax</p>
                      <p className={s.number}>$50</p>
                    </li>
                    <li className={s.item}>
                      <p className={s.label_const}>
                        Estimated shipping & Handling
                      </p>
                      <p className={s.number}>$29</p>
                    </li>
                    <li className={s.item}>
                      <p className={s.label}>Discount</p>
                      <p className={s.number}>${discount}</p>
                    </li>
                    <li className={s.item}>
                      <p className={s.label}>Total</p>
                      <p className={s.number}>${total + 79}</p>
                    </li>
                    <li className={s.item}>
                      <p className={s.label}>Number of products</p>
                      <p className={s.number}>{count} units</p>
                    </li>
                  </ul>
                  <button
                    className={s.button}
                    onClick={() => makeOrder.mutate(products)}
                  >
                    Checkout
                  </button>
                </section>
              </>
            ) : status === "pending" ? (
              <h1 style={{ margin: "300px auto", textAlign: "center" }}>
                Loading Cart...
              </h1>
            ) : (
              <h1 style={{ margin: "300px auto", textAlign: "center" }}>
                Error loading Cart
              </h1>
            )}
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
}
