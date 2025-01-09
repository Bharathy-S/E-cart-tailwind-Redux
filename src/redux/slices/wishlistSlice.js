import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name: 'wishlist',
initialState: [],  
reducers:{
    // action
    addToWishlist: (state, actionFromView)=>{
        state.push(actionFromView.payload)
    },
     // action
    removeItem: (state, actionFromWishlist)=>{
        return state.filter(item=>item.id!= actionFromWishlist.payload)
    }
}
})
//to export actions
export const {addToWishlist, removeItem}=wishlistSlice.actions
export default wishlistSlice.reducer