import MyLoader from "./Loader";
import Card from "../ProductCard";
import s from "./products.module.scss";

export default function Products({ products, status }) {
  if (status === "error") return <h2>No products</h2>;
  return (
    <>
      <div className={s.inner}>
        {(() => {
          switch (status) {
            case "success":
              return products.length > 0 ? (
                products.map((el) => <Card key={el.objectId} product={el} />)
              ) : (
                <h1>No Products Found</h1>
              );

            case "pending":
              return Array.from({ length: 16 }).map((_, i) => (
                <MyLoader key={i} />
              ));

            case "error":
            default:
              return <h2>Something Went Wrong</h2>;
          }
        })()}
      </div>
    </>
  );
}
