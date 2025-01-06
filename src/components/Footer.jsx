//rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '250px', marginTop: '100px' }} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{ width: '400px' }} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E-Cart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>

        <div className='flex flex-col'>
        <h5 className='text-xl font-bold' >Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>History Page</Link>
        </div>
        
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Guides</h5>
                    <a href="https://react.dev/" target='blank' style={{ textDecoration: 'none', color: 'white' }}>React</a>
                    <a href="https://react-bootstrap.netlify.app/" target='blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
                    <a href="https://www.npmjs.com/package/react-router-dom" target='blank' style={{ textDecoration: 'none', color: 'white' }}>React Router</a>
        </div>

        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Contacts</h5>
                <div className='flex'>
                    <input type="text" placeholder='Enter your Email here...'  className='rounded p-1'/>
                    <button className='btn btn-info ms-2'> <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='icons flex justify-between mt-3'>
                    <a href="https://www.instagram.com/accounts/login/"  target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-brands fa-instagram"></i></a>

                    <a href="https://www.facebook.com/" target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-brands fa-facebook"></i></a>

                    <a href="https://x.com/twitt_login?lang=en"  target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-brands fa-twitter"></i></a>

                    <a href="https://github.com/" target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-brands fa-github"></i></a>

                    <a href="https://www.linkedin.com/feed/" target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-brands fa-linkedin"></i></a>

                    <a href="https://globfone.com/call-phone/" target='blank' style={{textDecoration:'none' , color:'white'}}><i class="fa-solid fa-phone"></i></a>
                </div>
        </div>
      </div>
      <p className='text-center mt-3 text-white'>copyright &copy; May 2024 Batch, Media Player. Built with React.</p>
    </div>
  )
}

export default Footer