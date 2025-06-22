import s from "./ordercard.module.scss";
import { Link } from "react-router";
import { useProductsStore } from "../../../../../../zustand/productsStore";

export default function OrderCard({ product }) {
  const setProduct = useProductsStore((state) => state.setProduct);
  const onClickCard = (product) => {
    setProduct(product);
    window.scrollTo(0, 0);
  };

  return (
    <Link to={`/catalog/${product.category}/${product.id}`} className={s.card}>
      <section className={s.inner} key={product.id}>
        <div className={s.picture_wrapper} onClick={() => onClickCard(product)}>
          <img className={s.picture} src={product?.images[0]} alt='product' />
        </div>
        <h3 className={s.title}>
          {product.name}, {product.color} <br />{" "}
          {product.memory === 1
            ? `${product?.memory}TB`
            : `${product?.memory}GB`}
        </h3>
        <p className={s.price}>
          {product.count} x{" "}
          {Number(product.totalPrice)}$
        </p>
      </section>
    </Link>
  );
}
