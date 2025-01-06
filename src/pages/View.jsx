//rafce
import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col mx-5'>

        {/* gird for 2 sections in product detail (View)*/}
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'150px'} height={'200px'} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeAPhglCSQvSGNquX5AZRn4Zrn8AmgWwkdI64lycTkjhI0YDurdLlo4TKeiIrfU5l1CCkS1wL9CbJgVrV_MylNER8BhY4_mMR5vIvy2-rkAjWIkOmpuTRCNQ" alt="" />

          <div>
            <h3 className='font-bold' s>PID : id</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand : brand</h4>
            <h4>Category : category</h4>
            <p>
              <span className='font-bold'>Description :</span> Aperiam ab repudiandae cupiditate optio voluptatum. Praesentium, cupiditate neque non dicta tempora reprehenderit libero quibusdam tenetur soluta veritatis? Eum officia excepturi consequatur.
              <div className='flex justify-between mt-5'>
                <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                <button className='bg-green-600 text-white p-2'>Add to Cart</button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View