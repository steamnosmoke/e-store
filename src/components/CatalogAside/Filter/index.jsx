import s from "./filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../assets/images/arrow.svg";
import { useState } from "react";
import { chooseFilter } from "../../../redux/slices/catalogSlice";
import checkbox from "../images/checkbox.svg"

export default function Filter({ filter }) {
  const dispatch = useDispatch();
  const [isOpened, setOpened] = useState(false);
  const { filters } = useSelector((state) => state.catalog);

  const onClickFilter = (filter) => {
    dispatch(chooseFilter(filter));
  };
  return (
    <>
      <li className={s.item}>
        <div className={s.filter} onClick={() => setOpened(!isOpened)}>
          <h2 className={s.title}>{filter.title}</h2>
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
                    title: filter.title,
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
