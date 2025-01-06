import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./slices/productSlice"
const cartStore= configureStore({
    reducer:{
// products: productReducer,
    }
})
export default cartStore