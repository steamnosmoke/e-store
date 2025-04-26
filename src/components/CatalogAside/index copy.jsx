import s from "./catalog_aside.module.scss";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../assets/images/arrow.svg";
import { useEffect } from "react";
import { fetchFilters } from "../../redux/slices/catalogSlice";

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
          {categories[0].filters.map((filter, filterIndex) => (
            <li className={s.item} key={filter.id}>
              <div className={s.filter}>
                <h2 className={s.title}>{filter.title}</h2>
                <img
                  className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                  src={arrow}
                  alt=''
                />
              </div>
              {/* <ul className={s.list}>
                {filter[filterIndex].values.map((item, index) => 
                (
                  <li className={s.item} key={index}>
                    <input type='checkbox' name={item} id={item} />{item}
                  </li>
                )
                )}
              </ul> */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
