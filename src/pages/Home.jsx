//rafce
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);
  console.log(allProducts, loading, errorMsg);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {/* pass an attribute 'insideHome' to the navbar in home page & set to true */}
      <Header insideHome={true} />
      {/* set paddingTop bcz we fixed the header nav, so it will overlap */}
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>

        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'70px'} height={'70px'} src="https://i.gifer.com/ZKZg.gif" alt="" />
              Loading.....
            </div>
            :
            <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  allProducts?.length > 0 ?
                  allProducts?.map(product=>(
                    <div className='rounded border p-2 shadow'>
                      <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold '>{product?.title}</h3>
                        <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                      </div>

                    </div>
                    ))
                    :
                    <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                      Product not found!!!
                    </div>
                }
              </div>
            </>
        }
      </div>
    </>
  )
};

export default Home;