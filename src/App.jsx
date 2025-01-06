import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {


  return (
    <>
   <Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/wishlist' element={<Wishlist/>} />
 <Route path='/cart' element={<Cart/>} />
 {/* for varying data use ":" */}
 <Route path='/:id/view' element={<View/>} />
  {/* for any path other than predefined path */}
 <Route path='/*' element={<Pnf/>} />
   </Routes>

{/* Footer */}
<Footer/>
    </>
  )
}

export default App
