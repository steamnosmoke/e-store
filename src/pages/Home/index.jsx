import Categories from "../../components/Categories";
import MainBanner from "../../components/MainBanner";
import Products from "../../components/Products";
import Tablets from "../../components/Tablets";
import s from "./home.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { categoryHome, products, statusHome } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts(categoryHome));
  }, [dispatch, categoryHome]);
  return (
    <>
      <main className={s.main}>
        <MainBanner product={products[0]}/>
        <Tablets />
        <Categories />
        <section className={s.products}>
          <div className='container'>
            <Products products={products} status={statusHome} />
          </div>
        </section>
      </main>
    </>
  );
}
