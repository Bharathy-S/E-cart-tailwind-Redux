import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"
import cartSlice from "./slices/cartSlice"
// store
const cartStore = configureStore({
    reducer: {
        //now 'productSlice', 'wishlistSlice' , 'cartSlice' is available in store
        productReducer: productSlice,
        wishlistReducer: wishlistSlice, 
        cartReducer:cartSlice
    }
})
export default cartStore