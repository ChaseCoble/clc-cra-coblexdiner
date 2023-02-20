import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartState",
    initialState: { 
        value : {
            cartItems: [],
            total: 0           
        }
    },
    reducers : {
        addItem : (state, action) => { 
          state.cartItems = state.cartItems.push(action.payload.cartItems);
          state.total = state.total + action.payload.total;
        },
        clearCart : (state) => {
           state.cartItems = [];
           state.total = 0
        }
    }
})

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;