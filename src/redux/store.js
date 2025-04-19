import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import catalogReducer from "./slices/catalogSlice";
import productReducer from "./slices/productSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    catalog: catalogReducer,
    product: productReducer,
  },
});
