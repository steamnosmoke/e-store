import CatalogAside from "../../components/CatalogAside/index";
import Card from "../../components/ProductCard";
import s from "./catalog.module.scss";
import { useEffect } from "react";
import { Link } from "react-router";

import arrow from "../../assets/images/arrow.svg";

import { useDispatch, useSelector } from "react-redux";
import { setFilterOpened } from "../../redux/slices/catalogSlice";
import ChoosingCategories from "../ChoosingCategories";
import { fetchProducts } from "../../redux/slices/catalogSlice";
import Products from "../../components/Products";
import { useParams } from "react-router";

export default function Catalog() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { categoryCatalog, isFiltersOpened, products, count, statusCatalog } =
    useSelector((state) => state.catalog);

  const ToggleFilter = () => {
    dispatch(setFilterOpened());
  };

  useEffect(() => {
    dispatch(fetchProducts(categoryCatalog));
  }, [dispatch, categoryCatalog]);

  return (
    <>
      <main className={s.main}>
        <>
          <header className={s.header}>
            <div className='container'>
              <div className={s.paths}>
                <Link to={"/"}>Home</Link>
                <p>{`>`}</p>
                <Link to={"/catalog"}>Catalog</Link>
                <p>{`>`}</p>
                <Link to={`/catalog/${categoryCatalog}`}>
                  {categoryCatalog}
                </Link>
              </div>
              <div className={s.bottom}>
                <div className={s.filter} onClick={ToggleFilter}>
                  <h2 className={s.title}>Filters</h2>
                  <img
                    className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                    src={arrow}
                    alt=''
                  />
                </div>
                <div className={s.block}>
                  <span className={s.count}>
                    <span className={s.count_desc}>Selected Products: </span>
                    {count}
                  </span>
                  sorting
                </div>
              </div>
            </div>
          </header>
          <section className={s.catalog}>
            <div className={`container ${s.catalog_container}`}>
              <div className={s.inner}>
                {categoryCatalog && <CatalogAside />}
                <Products
                  className={s.products}
                  products={products}
                  status={statusCatalog}
                />
              </div>
            </div>
          </section>
        </>
      </main>
    </>
  );
}
