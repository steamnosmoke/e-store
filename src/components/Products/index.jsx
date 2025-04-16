import Card from "../ProductCard";
import s from "./products.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhZKqBEcppVAySnIJaFZ8XnQN5xgIDo9Y",
  authDomain: "e-store-4ca3a.firebaseapp.com",
  databaseURL: "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-store-4ca3a",
  storageBucket: "e-store-4ca3a.firebasestorage.app",
  messagingSenderId: "463858100058",
  appId: "1:463858100058:web:e2bbfabb50af5650877563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        "https://techstoredb.firebaseio.com/products.json",
        {
          params: {
            orderBy: "category",
            equalTo: "Phones",
            // Фильтрация по цене выполняется на клиенте
          },
        }
      );
      // const {data} = await axios.get("https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy=category&equalTo=Phones")
      await console.log(data);
      await setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <section className={s.products}>
        <div className='container'>
          <div className={s.inner}>
            {products.map((el) => (
              <Card key={el.id} product={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
