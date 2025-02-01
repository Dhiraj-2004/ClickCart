import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Orders' element={<Orders/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Product' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
