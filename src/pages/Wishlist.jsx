//rafce
import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
   //'useSelector' used to access states from store 
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)


  const handleCart=(product)=>{
    //to remove product after add to cart button clicked in wishlist page
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))//to add product to cart
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product Quantity is Incrementing!!")
    }else{
      alert("Product added to cart!!")
    }
  }


  return (
    <>
      <Header/>

      {/* set paddingTop bcz we fixed the header nav, so it will overlap */}
      <div style={{ paddingTop: '100px' }} className='px-5'>

       {
        userWishlist?.length>0 ?
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
       {
        userWishlist?.map(product=>(
          <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>{product?.title}</h3>
            <div className='flex justify-evenly mt-3'>
              <button onClick={()=>dispatch(removeItem(product?.id))}  className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
              <button onClick={()=>handleCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
          </div>
        </div>
        ))
       }
        </div>

      </>
      :
      <div className='flex justify-center items-center h-screen'>
        <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='text-3xl text-red-600'>Your Wishlist is empty!!!</h1>
      </div>
       }

      </div>


    </>
  )
}

export default Wishlist