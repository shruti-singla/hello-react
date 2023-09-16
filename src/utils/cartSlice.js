import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart store",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    reduceItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = [];
    },
  },
});

export const { addItems, reduceItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
