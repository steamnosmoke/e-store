// https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/

import { Routes, Route } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        {/* <Route path='/contacts' element={<Home />} />
        <Route path='/blog' element={<Home />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
