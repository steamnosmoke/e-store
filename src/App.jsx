import { Routes, Route } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import ChoosingCategories from "./pages/ChoosingCategories";
import Profile from "./pages/Profile";

import RegisterModal from "./components/modals/RegisterModal";
import AuthModal from "./components/modals/AuthModal";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { useModalStore } from "./zustand/modalStore";

function App() {

  const openAuthModal = useModalStore((state) => state.openAuthModal);
  const openRegisterModal = useModalStore((state) => state.openRegisterModal);
  const closeModals = useModalStore((state) => state.closeModals);
  const isAuthModalOpen = useModalStore((state) => state.isAuthModalOpen);
  const isRegisterModalOpen = useModalStore(
    (state) => state.isRegisterModalOpen
  );



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
          onClose={() => closeModals()}
          onSwitchToRegister={() => openRegisterModal()}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => closeModals()}
          onSwitchToLogin={() => openAuthModal()}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
