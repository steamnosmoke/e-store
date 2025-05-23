import s from "./catalog_aside.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFilters } from "../../redux/slices/catalogSlice";
import Filter from "./Filter";

export default function CatalogAside() {
  const dispatch = useDispatch();
  const { isFiltersOpened, categoryCatalog, categories } = useSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    dispatch(fetchFilters(categoryCatalog));
  }, [dispatch, categoryCatalog]);
  return (
    <>
      <section className={`${s.aside} ${isFiltersOpened && s.opened}`}>
        <ul className={s.filter_list}>
          {categories.map(el=><Filter filter={el}/>)}
        </ul>
        <button className="black-btn" style={{fontSize:"16px", padding:"12px 30px", margin: "0 auto"}}>Submit</button>
      </section>
    </>
  );
}
