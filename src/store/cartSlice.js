import { createSlice } from "@reduxjs/toolkit";

// initialize empty state
const initialState = [];

// create our main function
const cartSlice = createSlice({
  // name of method cart
  name: "cart",
  initialState,

  //   reducers it's holds our method functions
  reducers: {
    // add item in cart function
    add(state, action) {
      state.push(action.payload);
    },
    // remove item from cart function
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

// destructuring add and remove from cartSlice.actions and export them
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
