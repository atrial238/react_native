import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../data/dummy-data";

export const productsSlice = createSlice({
  name: "allProducts",
  initialState: PRODUCTS,
  reducers: {
    createProduct: (state, action) => {},
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
});

export const { deleteProduct, updateProduct, createProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
