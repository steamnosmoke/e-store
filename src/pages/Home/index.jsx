import Categories from "../../components/Categories";
import MainBanner from "../../components/MainBanner";
import Products from "../../components/Products";
import Tablets from "../../components/Tablets";
import s from "./home.module.scss";

import { useProducts } from "../../hooks/useProducts";
import { useProductsStore } from "../../zustand/productsStore";

export default function Home() {
  const category = useProductsStore((state) => state.category);
  const { products, status } = useProducts(category);
  return (
    <>
      <main className={s.main}>
        <MainBanner product={products[0]} />
        <Tablets />
        <Categories />
        <section className={s.products}>
          <div className='container'>
            <Products products={products} status={status} />
          </div>
        </section>
      </main>
    </>
  );
}
