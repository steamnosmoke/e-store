import s from "./sorting.module.scss";
import { useProductsStore } from "../../../../zustand/productsStore";
import { useEffect, useState } from "react";

export default function Sorting() {
  const setSortingParams = useProductsStore((state) => state.setSortingParams);

  const param = useProductsStore((state) => state.sortingParams.param);
  const mod = useProductsStore((state) => state.sortingParams.mod);

  const [opened, setOpened] = useState(false);

  return (
    <div className={s.sorting} onClick={() => setOpened(!opened)}>
      <p className={s.title}>
        <span>Sort by</span> {param} {mod === "desc" ? "↓" : "↑"}
      </p>
      <ul className={`${opened && s.opened} ${s.list}`}>
        <li
          className={s.item}
          onClick={() => setSortingParams({ param: "rating", mod: "desc" })}
        >
          rating ↓
        </li>
        <li
          className={s.item}
          onClick={() => setSortingParams({ param: "rating", mod: "asc" })}
        >
          rating ↑
        </li>
        <li
          className={s.item}
          onClick={() => setSortingParams({ param: "price", mod: "desc" })}
        >
          price ↓
        </li>
        <li
          className={s.item}
          onClick={() => setSortingParams({ param: "price", mod: "asc" })}
        >
          price ↑
        </li>
      </ul>
    </div>
  );
}
