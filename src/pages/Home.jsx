//rafce
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
const dispatch= useDispatch()

useEffect(()=>{
  dispatch(fetchProducts())
},[])
  return (
    <>
    {/* pass an attribute 'insideHome' to the navbar in home page & set to true */}
      <Header insideHome={true}/>
      {/* set paddingTop bcz we fixed the header nav, so it will overlap */}
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>

        {/* grid view of products */}
        <div className='grid grid-cols-4 gap-4'>

          {/* 1st product */}
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>Product Name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home