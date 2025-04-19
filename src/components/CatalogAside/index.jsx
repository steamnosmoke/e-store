import s from "./catalog_aside.module.scss";
import { useSelector } from "react-redux";
import arrow from "../../assets/images/arrow.svg";

export default function CatalogAside() {
  const isFiltersOpened = useSelector((state) => state.catalog.isFiltersOpened);
  return (
    <>
      <section className={`${s.aside} ${isFiltersOpened && s.opened}`}>
        {/* <div className={s.filter}> */}
          <ul className={s.filter_list}>
            <li className={s.item}>
              <div className={s.filter}>
                <h2 className={s.title}>Brand</h2>
                <img
                  className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                  src={arrow}
                  alt=''
                />
              </div>
              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
            <li className={s.item}>
            <div className={s.filter}>
                <h2 className={s.title}>Price</h2>
                <img
                  className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                  src={arrow}
                  alt=''
                />
              </div>
              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
            <li className={s.item}>
            <div className={s.filter}>
                <h2 className={s.title}>Model</h2>
                <img
                  className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                  src={arrow}
                  alt=''
                />
              </div>
              <img
                className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                src={arrow}
                alt=''
              />

              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
            <li className={s.item}>
              <h2 className={s.title}>Built-in Memory</h2>
              <img
                className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                src={arrow}
                alt=''
              />
              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
            <li className={s.item}>
              <h2 className={s.title}>Color</h2>
              <img
                className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                src={arrow}
                alt=''
              />
              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
            <li className={s.item}>
              <h2 className={s.title}>SIM</h2>
              <img
                className={`${s.arrow} ${isFiltersOpened ? s.rotated : ""}`}
                src={arrow}
                alt=''
              />
              <ul className={s.list}>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />1
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />2
                </li>
                <li className={s.item}>
                  <input type='checkbox' name='' id='' />3
                </li>
              </ul>
            </li>
          </ul>
        {/* </div> */}
      </section>
    </>
  );
}
