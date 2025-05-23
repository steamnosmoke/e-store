import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
import catalog from "./slices/catalogSlice";
import product from "./slices/productSlice";
import auth from "./slices/authSlice";
import modal from "./slices//modalSlice";
import review from "./slices/reviewSlice";
import cart from "./slices/cartSlice";
import wishlist from "./slices/wishlistSlice";
import order from "./slices/orderSlice";

export default configureStore({
  reducer: {
    search,
    catalog,
    product,
    auth,
    modal,
    review,
    cart,
    wishlist,
    order,
  },
});
