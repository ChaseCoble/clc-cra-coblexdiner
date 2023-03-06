import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    total : 0
}
const cartSlice = createSlice({
    name: "cartState",
    initialState,
    reducers : {
        addItem : (state, action) => { 
          state.cartItems = state.cartItems.push(action.payload.cartItems);
        },
        addCost : (state, action) => {
            state.total = state.total + action.payload
        },
        clearCart : (state) => {
           state.cartItems = [];
           state.total = 0
        }
    }
})

export const { addItem, clearCart, addCost } = cartSlice.actions;
export default cartSlice.reducer;