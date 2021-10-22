import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../data/dummy-data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
  },
  reducers: {
    createProduct: (state, action) => {},
    updateProduct: (state, action) => {},
    deleteProduct: (state, { payload }) => {
      return {
        userProducts: state.userProducts.filter(
          (product) => product.id !== payload
        ),
        allProducts: state.userProducts.filter(
          (product) => product.id !== payload
        ),
      };
    },
  },
});

export const { deleteProduct, updateProduct, createProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
