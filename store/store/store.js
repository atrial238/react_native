import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../slice/products";
import CartReducer from "../slice/cart";
import OrderReducer from "../slice/orders";

export default configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
  },
});
