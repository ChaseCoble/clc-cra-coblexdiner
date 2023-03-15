import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    price : []
}
const cartSlice = createSlice({
    name: "cartState",
    initialState,
    reducers : {
        addItem : (state, action) => { 
          state.cartItems.push(action.payload);
        },
        addCost : (state, action) => {
          state.price.push(action.payload);
        },
        clearCart : (state) => {
           state.cartItems = [];
           state.price = [];
        }
    }
})

export const { addItem, clearCart, addCost } = cartSlice.actions;
export default cartSlice.reducer;