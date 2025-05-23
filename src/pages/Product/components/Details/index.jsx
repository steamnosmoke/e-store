import s from "./details.module.scss";
import { useEffect, useState } from "react";
const Details = ({ product }) => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  const specs = new Map(Object.entries(product.specs));

  const formatKey = (key) => key.split(/(?=[A-Z])/).join(" ");

  useEffect(() => {}, []);
  return (
    <>
      <section className={s.details}>
        <div className={s.inner}>
          <h2 className={s.title}>Details</h2>

          <p className={s.descr}>{product.specs.description}</p>
          <ul className={`${s.main_list} ${isDetailsOpened && s.all_list}`}>
            {[...specs.entries()].map(([key, value], index) =>
              key !== "description" && typeof value !== "object" ? (
                <li
                  key={index}
                  className={s.spec}
                  style={{ paddingBottom: 16 }}
                >
                  <h3 className={s.item_title}>{formatKey(key)}</h3>
                  <p className={s.value}>{value}</p>
                </li>
              ) : Array.isArray(value) ? (
                <li
                  key={index}
                  className={s.spec}
                  style={{ paddingBottom: 16 }}
                >
                  <h3 className={s.item_title}>{formatKey(key)}</h3>
                  <div>
                    {value.map((el) => (
                      <p className={s.value}>{el}</p>
                    ))}
                  </div>
                </li>
              ) : (
                typeof value === "object" &&
                !Array.isArray(value) && (
                  <li key={index} className={s.main_item}>
                    <h3 className={s.item_title}>{formatKey(key)}</h3>
                    <ul className={s.item_list}>
                      {Object.entries(value).map(([k, v], i) =>
                        typeof v === "object" && !Array.isArray(v) ? (
                          <li key={i} className={s.spec}>
                            <h4 className={s.name}>{formatKey(k)}</h4>
                            <div>
                              {Object.entries(v).map(([itemKey, item], j) => (
                                <p key={j} className={s.value}>
                                  {formatKey(itemKey)}: {item}
                                </p>
                              ))}
                            </div>
                          </li>
                        ) : typeof v === "object" && Array.isArray(v) ? (
                          <li key={index} className={s.spec}>
                            <h4 className={s.name}>{formatKey(k)}</h4>
                            <div>
                              {v.map((el, j) => (
                                <p key={j} className={s.value}>
                                  {el}
                                </p>
                              ))}
                            </div>
                          </li>
                        ) : (
                          typeof v !== "object" && (
                            <li key={i} className={s.spec}>
                              <h4 className={s.name}>{formatKey(k)}</h4>
                              <p className={s.value}>
                                {typeof v !== "boolean"
                                  ? v
                                  : v === true
                                  ? "+"
                                  : " -"}
                              </p>
                            </li>
                          )
                        )
                      )}
                    </ul>
                  </li>
                )
              )
            )}
          </ul>

          <button
            className={s.button}
            style={{
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 56px",
              fontSize: "14px",
            }}
            onClick={() => setDetailsOpened(!isDetailsOpened)}
          >
            View More{" "}
            <svg
              className={`${s.arrow} ${isDetailsOpened && s.rotate}`}
              width='24.000000'
              height='24.000000'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                id='Icon/24px/Arrow Down'
                rx='0.000000'
                width='23.000000'
                height='23.000000'
                transform='translate(0.500000 0.500000)'
                fill='#FFFFFF'
                fillOpacity='0'
              />
              <path
                id='Vector 9'
                d='M18.5 9.53L18.53 9.53C18.82 9.23 18.82 8.76 18.53 8.46C18.23 8.17 17.76 8.17 17.46 8.46L17.46 8.49L18.5 9.53ZM6.53 8.49L6.53 8.46C6.23 8.17 5.76 8.17 5.46 8.46C5.17 8.76 5.17 9.23 5.46 9.53L5.49 9.53L6.53 8.49Z'
                fill='#000000'
                fillOpacity='1.000000'
              />
              <path
                id='Vector 9'
                d='M17.46 8.46L11.46 14.46L12 15L12.53 14.46L6.53 8.46L5.46 9.53L12 16.06L18.53 9.53L17.46 8.46ZM18.5 9.53L18.53 9.53C18.82 9.23 18.82 8.76 18.53 8.46C18.23 8.17 17.76 8.17 17.46 8.46L17.46 8.49L18.5 9.53ZM6.53 8.49L6.53 8.46C6.23 8.17 5.76 8.17 5.46 8.46C5.17 8.76 5.17 9.23 5.46 9.53L5.49 9.53L6.53 8.49Z'
                fill='#000000'
                fillOpacity='1.000000'
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Details;
