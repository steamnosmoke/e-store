import CatalogAside from "../../components/CatalogAside";
import Products from "../../components/Products";
import s from "./catalog.module.scss";

import arrow from "../../assets/images/arrow.svg";

import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOpened } from "../../redux/slices/catalogSlice";
import ChoosingCategories from "../ChoosingCategories";

export default function Catalog() {
  const dispatch = useDispatch();

  const isFiltersOpened = useSelector((state) => state.catalog.isFiltersOpened);
  const category = useSelector(state=>state.product.category)

  const ToggleFilter = () => {
    dispatch(setFilterOpened());
  };

  return (
    <>
      <main className={s.main}>
        {category ? <>
        <header className={s.header}>
          <div className='container'>
            <div className={s.paths}>Home | Catalog</div>
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
                <span className={s.count}>104 товара</span>
                sorting
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <section className={s.catalog}>
            <CatalogAside />
            <Products />
          </section>
        </div></> : <ChoosingCategories/>}
      </main>
    </>
  );
}
