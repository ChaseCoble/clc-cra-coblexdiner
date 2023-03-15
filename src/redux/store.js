import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import menuSlice from "./features/menuStatesSlice";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        cartState : cartSlice,
        menuState : menuSlice
    },
    middleware : [thunk]     
});

export default store;