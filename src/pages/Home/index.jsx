import MainBanner from "../../components/MainBanner";
import Tablets from "../../components/Tablets";
import s from "./home.module.scss";

import { Link } from "react-router";

export default function Home() {
  return (
    <>  
      <main className={s.main}>
        <MainBanner/>
        <Tablets/>
      </main>
    </>
  );
}
