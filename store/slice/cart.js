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
    deleteFromCart: (state, action) => {},
  },
});

export const { addtoCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
