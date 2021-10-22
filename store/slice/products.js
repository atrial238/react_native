import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../data/dummy-data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
  },
  reducers: {
    createProduct: (state, action) => {
      const { title, imageUrl, description, price } = action.payload;
      const id = state.allProducts.length + 1;
      const product = {
        id: `p${id}`,
        ownerId: "u1",
        title,
        imageUrl,
        description,
        price,
      };
      return {
        allProducts: [...state.allProducts, product],
        userProducts: [...state.userProducts, product],
      };
    },
    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const { title, imageUrl, description } = data;
      const productIndex = state.userProducts.findIndex(
        (product) => product.id === id
      );
      state.userProducts[productIndex] = {
        ...state.userProducts[productIndex],
        title,
        imageUrl,
        description,
      };
    },
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
