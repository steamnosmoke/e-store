import s from "./card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProduct } from "../../redux/slices/productSlice";
import { useParams } from "react-router";
import ProductParams from "./components/ProductParams";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import { Link } from "react-router";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    const saved = localStorage.getItem("product");
   
      dispatch(setProduct(JSON.parse(saved)));
  }, [dispatch, id]);

  if (Object.values(product).length === 0) {
    return <>loading...</>;
  }

  return (
    <>
      <main className={s.main}>
        <div className='container'>
          <header className={s.header}>
            <Link to={"/"}>Home</Link>
            <p>{`>`}</p>
            <Link to={"/catalog"}>Catalog</Link>
            <p>{`>`}</p>
            <Link to={`/catalog/${product.category}`}>{product.category}</Link>
            <p>{`>`}</p>
            <Link to={`/catalog/${id}`}>{product.name}</Link>
          </header>
          <ProductParams product={product || {}} />
          <Details product={product || {}} />
          <Reviews product={product || {}} />
        </div>
      </main>
    </>
  );
}
