import { useDispatch, useSelector } from "react-redux";
import s from "./categories.module.scss";

import { chooseCategory } from "../../redux/slices/catalogSlice";
import { Link } from "react-router";

export default function ChoosingCategories() {
  const dispatch = useDispatch();

  return (
    <>
      <section className={s.categories}>
        <div className='container'>
          <div className={s.inner}>
            <ul className={s.list}>
              <li className={`${s.item} ${s.phone}`}>
                <Link
                  to={"/catalog/Phones"}
                  onClick={() => dispatch(chooseCategory("Phones"))}
                  className={s.item_inner}
                >
                  <div className={`${s.phone_image} ${s.item_image}`}></div>
                  <p className={s.category}>Phones</p>
                </Link>
              </li>
              <li className={`${s.item} ${s.gaming}`}>
                <Link
                  to={"/catalog/Gaming Consoles"}
                  className={s.item_inner}
                  onClick={() => dispatch(chooseCategory("Gaming Consoles"))}
                >
                  <div className={`${s.gaming_image} ${s.item_image}`}></div>
                  <p className={s.category}>Gaming</p>
                </Link>
              </li>
              <li className={`${s.item} ${s.watch}`}>
                <Link
                  to={"/catalog/Smartwatches"}
                  className={s.item_inner}
                  onClick={() => dispatch(chooseCategory("Smartwatches"))}
                >
                  <div className={`${s.watch_image} ${s.item_image}`}></div>
                  <p className={s.category}>Smart Watches</p>
                </Link>
              </li>
              <li className={`${s.item} ${s.accessory}`}>
                <Link
                  to={"/catalog/Accessories"}
                  className={s.item_inner}
                  onClick={() => dispatch(chooseCategory("Accessories"))}
                >
                  <div className={`${s.accessory_image} ${s.item_image}`}></div>
                  <p className={s.category}>Accessories</p>
                </Link>
              </li>
              <li className={`${s.item} ${s.computer}`}>
                <Link
                  to={"/catalog/Computers"}
                  className={s.item_inner}
                  onClick={() => dispatch(chooseCategory("Computers"))}
                >
                  <div className={`${s.computer_image} ${s.item_image}`}></div>
                  <p className={s.category}>Computers</p>
                </Link>
              </li>
              <li className={`${s.item} ${s.headphone}`}>
                <Link
                  to={"/catalog/Headphones"}
                  className={s.item_inner}
                  onClick={() => dispatch(chooseCategory("Headphones"))}
                >
                  <div className={`${s.headphone_image} ${s.item_image}`}></div>
                  <p className={s.category}>Headphones</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
