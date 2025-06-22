import s from "./catalog_aside.module.scss";
import Filter from "./Filter";
import { useFilters } from "../../hooks/useProducts";
import { useProductsStore } from "../../zustand/productsStore";

export default function CatalogAside() {
  const category = useProductsStore((state) => state.category);
  const isFilterOpened = useProductsStore((state) => state.isFilterOpened);
  const setConfirmedFilters = useProductsStore(
    (state) => state.setConfirmedFilters
  );
  const clearFilters = useProductsStore((state) => state.clearFilters);

  const { filters, status } = useFilters(category);
  if (status === "success")
    return (
      <>
        <section className={`${s.aside} ${isFilterOpened && s.opened}`}>
          <ul className={s.filter_list}>
            {filters.map((el, i) => (
              <Filter filter={el} key={i} />
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <button
              className='black-btn'
              style={{
                fontSize: "16px",
                padding: "12px 30px",
                margin: "0 auto",
              }}
              onClick={() => setConfirmedFilters()}
            >
              Confirm
            </button>
            <button
              className='black-btn'
              style={{
                fontSize: "16px",
                padding: "12px 30px",
                margin: "0 auto",
              }}
              onClick={() => clearFilters()}
            >
              Clear
            </button>
          </div>
        </section>
      </>
    );
}
