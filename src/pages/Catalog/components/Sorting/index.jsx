import { useState, useCallback, useMemo } from "react";
import s from "./sorting.module.scss";
import { useProductsStore } from "../../../../zustand/productsStore";

export default function Sorting() {
  const [opened, setOpened] = useState(false);

  const param = useProductsStore((state) => state.sortingParams.param);
  const mod = useProductsStore((state) => state.sortingParams.mod);
  const setSortingParams = useProductsStore((state) => state.setSortingParams);

  const handleSetParams = useCallback(
    (param, mod) => () => setSortingParams({ param, mod }),
    [setSortingParams]
  );

  const sortOptions = useMemo(
    () => [
      { label: "rating ↓", param: "rating", mod: "desc" },
      { label: "rating ↑", param: "rating", mod: "asc" },
      { label: "price ↓", param: "price", mod: "desc" },
      { label: "price ↑", param: "price", mod: "asc" },
    ],
    []
  );

  return (
    <div className={s.sorting} onClick={() => setOpened(!opened)}>
      <p className={s.title}>
        <span>Sort by</span> {param} {mod === "desc" ? "↓" : "↑"}
      </p>
      <ul className={`${opened && s.opened} ${s.list}`}>
        {sortOptions.map(({ label, param, mod }) => (
          <li
            key={label}
            className={s.item}
            onClick={handleSetParams(param, mod)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
