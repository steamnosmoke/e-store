import { Routes, Route } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import ChoosingCategories from "./pages/ChoosingCategories";
import Profile from "./pages/Profile";
import { useSelector, useDispatch } from "react-redux";
import {
  openAuthModal,
  closeModals,
  openRegisterModal,
} from "./redux/slices/modalSlice";
import RegisterModal from "./components/modals/RegisterModal";
import AuthModal from "./components/modals/AuthModal";
import { setUser } from "./redux/slices/authSlice";

import { useEffect } from "react";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { fetchProducts } from "./redux/slices/catalogSlice";
import { fetchWishlist } from "./redux/slices/wishlistSlice";

function App() {
  const dispatch = useDispatch();

  const { isAuthModalOpen, isRegisterModalOpen } = useSelector(
    (state) => state.modal
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
      dispatch(fetchWishlist());
    }
    dispatch(fetchProducts("Phones"));
  }, [dispatch]);

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<ChoosingCategories />} />
        {/* <Route path='/contacts' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} /> */}
        <Route path='/catalog/:category' element={<Catalog />} />
        <Route path='/catalog/:category/:id' element={<Product />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => dispatch(closeModals())}
          onSwitchToRegister={() => dispatch(openRegisterModal())}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => dispatch(closeModals())}
          onSwitchToLogin={() => dispatch(openAuthModal())}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
