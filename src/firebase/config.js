import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDhZKqBEcppVAySnIJaFZ8XnQN5xgIDo9Y",
  authDomain: "e-store-4ca3a.firebaseapp.com",
  databaseURL: "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-store-4ca3a",
  storageBucket: "e-store-4ca3a.firebasestorage.app",
  messagingSenderId: "463858100058",
  appId: "1:463858100058:web:e2bbfabb50af5650877563"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const rtdb = getDatabase(app); // <-- Получите экземпляр RTDB

// Экспортируйте все нужные экземпляры
export {
  auth,
  rtdb, // <-- Экспортируйте RTDB
  app
};