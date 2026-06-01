import { useEffect } from "react";

import s from "./catalog.module.scss";

import CatalogAside from "./components/CatalogAside";
import Products from "../../components/Products";
import CatalogHeader from "./components/CatalogHeader";

import { useProductsStore } from "../../zustand/productsStore";

import { useProducts } from "../../hooks/useProducts";

export default function Catalog() {
  const category = useProductsStore((state) => state.category);
  const confirmedFilters = useProductsStore((state) => state.confirmedFilters);
  const filteredProducts = useProductsStore((state) => state.filteredProducts);
  const param = useProductsStore((state) => state.sortingParams.param);
  const mod = useProductsStore((state) => state.sortingParams.mod);
  const sortProducts = useProductsStore((state) => state.sortProducts);
  const setFilteredProducts = useProductsStore(
    (state) => state.setFilteredProducts
  );

  const { products, status } = useProducts(category);

  useEffect(() => {
    setFilteredProducts(products);
  }, [confirmedFilters, status, mod, param, setFilteredProducts, sortProducts]);

  return (
    <>
      <main className={s.main}>
        <>
          <CatalogHeader />
          <section className={s.catalog}>
            <div
              className="container"
              style={{ display: "flex", position: "relative" }}
            >
              {category === "Phones" ? (
                <>
                  <CatalogAside />
                  <div className={s.inner}>
                    <Products products={filteredProducts} status={status} />
                  </div>
                </>
              ) : (
                <h1 className={s.empty}>No products</h1>
              )}
            </div>
          </section>
        </>
      </main>
    </>
  );
}
