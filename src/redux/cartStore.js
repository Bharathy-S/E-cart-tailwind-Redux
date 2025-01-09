import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"
// store
const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishlistReducer: wishlistSlice //now 'wishlistSlice' is available in store
    }
})
export default cartStore