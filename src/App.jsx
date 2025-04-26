import { Routes, Route } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        {/* <Route path='/contacts' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} /> */}
        <Route path='/catalog/:id' element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
