import CatalogAside from "./components/CatalogAside";
import s from "./catalog.module.scss";
import Products from "../../components/Products";
import { useProducts } from "../../hooks/useProducts";
import { useProductsStore } from "../../zustand/productsStore";
import { useEffect } from "react";
import CatalogHeader from "./components/CatalogHeader";

export default function Catalog() {
  const category = useProductsStore((state) => state.category);
  const { products, status } = useProducts(category);
  const confirmedFilters = useProductsStore((state) => state.confirmedFilters);
  const setFilteredProducts = useProductsStore(
    (state) => state.setFilteredProducts
  );
  const filteredProducts = useProductsStore((state) => state.filteredProducts);
  const param = useProductsStore((state) => state.sortingParams.param);
  const mod = useProductsStore((state) => state.sortingParams.mod);
  const sortProducts = useProductsStore((state) => state.sortProducts);


  useEffect(() => {
    setFilteredProducts(products);
    // sortProducts(filteredProducts, { param, mod });
  }, [confirmedFilters, status, mod, param, setFilteredProducts, sortProducts]);

  return (
    <>
      <main className={s.main}>
        <>
          <CatalogHeader />
          <section className={s.catalog}>
            <div
              className='container'
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
