import MyLoader from "../Loader";
import Card from "../ProductCard";
import s from "./products.module.scss";

export default function Products({ products, status }) {
  return (
    <>
      <div className={s.inner}>
        {status === "succeeded"
          ? products.map((el) => <Card key={el.objectId} product={el} />)
          : status === "loading" && [...new Array(16)].map((_, i) => <MyLoader key={i} />)}
      </div>
    </>
  );
}
