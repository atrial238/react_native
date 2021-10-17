import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/products";

export default configureStore({
  reducer: {
    allProducts: ProductReducer,
  },
});
