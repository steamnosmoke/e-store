import s from "./filter.module.scss";
import arrow from "../../../assets/images/arrow.svg";
import { useState } from "react";
import checkbox from "../images/checkbox.svg";
import { useProductsStore } from "../../../zustand/productsStore";

export default function Filter({ filter }) {
  const [isOpened, setOpened] = useState(true);
  const filters = useProductsStore((state) => state.filters);
  const setFilters = useProductsStore((state) => state.setFilters);
  
  const onClickFilter = (filter) => {
    setFilters(filter);
  };
  return (
    <>
      <li className={s.item}>
        <div className={s.filter} onClick={() => setOpened(!isOpened)}>
          <h2 className={s.title}>{filter?.title}</h2>
          <img
            className={`${s.arrow} ${isOpened && s.rotated}`}
            src={arrow}
            alt=''
          />
        </div>
        {isOpened && (
          <ul className={s.list}>
            {Object.values(filter.values).map((el, elIndex) => (
              <li
                className={s.filter_item}
                key={elIndex}
                onClick={() =>
                  onClickFilter({
                    title: filter.title.split().join(""),
                    value: el,
                    index: elIndex,
                  })
                }
              >
                <div
                  className={s.checkbox}
                  style={{
                    backgroundImage: `${
                      filters.find(
                        (item) =>
                          item.title === filter.title &&
                          item.values.includes(el)
                      )
                        ? `url(${checkbox})`
                        : "none"
                    }`,
                  }}
                ></div>
                <p className={s.name}>{JSON.stringify(el)}</p>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}
