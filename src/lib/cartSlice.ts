import { createSlice } from "@reduxjs/toolkit";
// import image1 from "../assets/image1.avif";

// interface itemsArrayType {
//   name: string;
//   price: number;
//   color: string;
//   image: string;
//   quantity: number;
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsArray: [
      {
        name: "",
        price: "",
        quantity: 0,
        color: "",
      },
    ],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addCartData: (state, action) => {
      state.totalPrice = action.payload.totalPrice;
      state.itemsArray = action.payload.itemsArray;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const { addCartData } = cartSlice.actions;

export default cartSlice.reducer;
