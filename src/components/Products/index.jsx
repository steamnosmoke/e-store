import { useSelector, useDispatch } from "react-redux";
import Card from "../ProductCard";
import s from "./products.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";

export default function Products() {
  const isFiltersOpened = useSelector((state) => state.catalog.isFiltersOpened);
  const { products, category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function fetchProducts() {
    //   const { data } = await axios.get(
    //     "https://6803741a0a99cb7408ec07d0.mockapi.io/products"
    //   );
    //   // const { data } = await axios.get(
    //   //   "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    //   // );
    //   await setProducts(data);
    // }

    // fetchProducts();
    dispatch(fetchProducts(category));
    console.log(category);
    console.log(products);
  }, [dispatch, category]);

  return (
    <>
      <div className={`${s.inner}`}>
        {products
          .filter((product) => product.category !== category)
          .map((el) => (
            <Card key={el.id} product={el} />
          ))}
      </div>
    </>
  );
}
