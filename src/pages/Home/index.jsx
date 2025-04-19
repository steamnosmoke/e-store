import Categories from "../../components/Categories";
import MainBanner from "../../components/MainBanner";
import Products from "../../components/Products";
import Tablets from "../../components/Tablets";
import s from "./home.module.scss";

import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <MainBanner />
        <Tablets />
        <Categories />

        <section className={s.products}>
          <div className='container'>
            <Products />
          </div>
        </section>
      </main>
    </>
  );
}
