import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import MainBanner from "../../components/MainBanner";
import Products from "../../components/Products";
import Tablets from "../../components/Tablets";
import s from "./home.module.scss";

import { Link } from "react-router";

export default function Home() {
  return (
    <>  
      <main className={s.main}>
        <MainBanner/>
        <Tablets/>
        <Categories/>
        <Products/>
        <Footer/>
      </main>
    </>
  );
}
