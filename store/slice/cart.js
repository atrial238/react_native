import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../data/dummy-data";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const existingProductIndex = state.findIndex(
        (product) => action.payload.id === product.data.id
      );
      if (existingProductIndex >= 0) {
        state[existingProductIndex] = {
          totalCount: state[existingProductIndex].totalCount + 1,
          data: {
            ...state[existingProductIndex].data,
            price:
              state[existingProductIndex].data.price *
              (state[existingProductIndex].totalCount + 1),
          },
        };
      } else {
        state.push({ totalCount: 1, data: action.payload });
      }
    },
    deleteFromCart: (state, action) => {
      if (action.payload.amount > 1) {
        state.forEach((product) => {
          if (product.data.id === action.payload.productId) {
            product.totalCount -= 1;
            product.data.price = product.data.price / product.totalCount;
          }
        });
        return state;
      }
      return state.filter(
        (product) => product.data.id !== action.payload.productId
      );
    },
  },
});

export const { addtoCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
