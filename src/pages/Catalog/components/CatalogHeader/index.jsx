import s from "./catalogHeader.module.scss";
import { Link } from "react-router";
import arrow from "../../images/arrow.svg";
import { useProductsStore } from "../../../../zustand/productsStore";
import Sorting from "../Sorting";

export default function CatalogHeader() {
  const category = useProductsStore((state) => state.category);
  const setFilterOpened = useProductsStore((state) => state.setFilterOpened);
  const isFilterOpened = useProductsStore((state) => state.isFilterOpened);
  const filteredProducts = useProductsStore((state) => state.filteredProducts);
  return (
    <header className={s.header}>
      <div className='container'>
        <div className={s.paths}>
          <Link to={"/"}>Home</Link>
          <p>{`>`}</p>
          <Link to={"/catalog"}>Catalog</Link>
          <p>{`>`}</p>
          <Link to={`/catalog/${category}`}>{category}</Link>
        </div>
        {category === "Phones" && (
          <div className={s.bottom}>
            <div className={s.filter} onClick={() => setFilterOpened()}>
              <h2 className={s.title}>Filters</h2>
              <img
                className={`${s.arrow} ${isFilterOpened ? s.rotated : ""}`}
                src={arrow}
                alt=''
              />
            </div>
            <div className={s.block}>
              <span className={s.count}>
                <span className={s.count_desc}>Selected Products: </span>
                {filteredProducts.length}
              </span>
              <Sorting/>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
