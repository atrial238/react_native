import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrders: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
