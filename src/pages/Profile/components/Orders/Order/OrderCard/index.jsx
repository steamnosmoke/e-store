import s from "./ordercard.module.scss";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../../../../redux/slices/productSlice";

export default function OrderCard({ product }) {
  const dispatch = useDispatch();

  const onClickCard = (product) => {
    localStorage.setItem("product", JSON.stringify(product));
    dispatch(setProduct(product));
    window.scrollTo(0, 0);
  };

  return (
    <Link to={`/catalog/${product.category}/${product.id}`} className={s.card}>
      <section className={s.inner} key={product.id}>
        <div className={s.picture_wrapper} onClick={() => onClickCard(product)}>
          <img
            className={s.picture}
            src={product?.variant?.images[0]}
            alt='product'
          />
        </div>
        <h3 className={s.title}>
          {product.name}, {product.color} <br />{" "}
          {product.memory === 1
            ? `${product?.variant?.memory}TB`
            : `${product?.variant?.memory}GB`}
        </h3>
        <p className={s.price}>
          {product.count} x {Number(product.total) / product.count}$
        </p>
      </section>
    </Link>
  );
}
