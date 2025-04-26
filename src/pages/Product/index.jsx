import s from "./card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../../redux/slices/productSlice";
import { useParams } from "react-router";
import ProductParams from "./components/ProductParams";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, statusProduct } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  if (statusProduct === "loading") {
    return <>loading...</>;
  }
  return (
    <>
      <main className={s.main}>
        <div className='container'>
          <header className={s.header}>
            {`Home  >  Catalog  >  ${product.category} ${
              product && ` >  ${product.name}`
            }`}
          </header>
          <ProductParams product={product || {}} />
        </div>
      </main>
    </>
  );
}
