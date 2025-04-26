import { useDispatch, useSelector } from "react-redux";
import s from "./categories.module.scss";

import { chooseCategory } from "../../redux/slices/catalogSlice";

export default function ChoosingCategories() {
  const dispatch = useDispatch();

  return (
    <>
      <section className={s.categories}>
        <div className='container'>
          <div className={s.inner}>
            <ul className={s.list}>
              <li
                className={`${s.item} ${s.phones}`}
                onClick={() => dispatch(chooseCategory("Phones"))}
              >
                <p className={s.category}>Phones</p>
              </li>
              <li
                className={`${s.item} ${s.gaming}`}
                onClick={() => dispatch(chooseCategory("Gaming Consoles"))}
              >
                <p className={s.category}>Gaming</p>
              </li>
              <li
                className={`${s.item} ${s.watch}`}
                onClick={() => dispatch(chooseCategory("Smartwatches"))}
              >
                <p className={s.category}>Smart Watches</p>
              </li>
              <li
                className={`${s.item} ${s.cameras}`}
                onClick={() => dispatch(chooseCategory("Accessories"))}
              >
                <p className={s.category}>Accessories</p>
              </li>
              <li
                className={`${s.item} ${s.computers}`}
                onClick={() => dispatch(chooseCategory("Computers"))}
              >
                <p className={s.category}>Computers</p>
              </li>
              <li
                className={`${s.item} ${s.headphones}`}
                onClick={() => dispatch(chooseCategory("Headphones"))}
              >
                <p className={s.category}>Headphones</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
