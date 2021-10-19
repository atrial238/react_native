import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../slice/products";
import CartReducer from "../slice/cart";

export default configureStore({
  reducer: {
    allProducts: ProductReducer,
    cart: CartReducer,
  },
});
