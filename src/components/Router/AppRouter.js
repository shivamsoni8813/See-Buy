import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandinPage from '../LandingPage/LandinPage'
import Login from '../Login/Login'
import Products from '../Product/Products'
import NavBar from '../NavBar/NavBar'
import Cart from '../CartUtility/Cart'
import CheckoutDetails from '../CheckOut/CheckoutDetails'

function AppRouter() {

  return (
  
  <div>
        <NavBar/>
        <Routes>
            <Route path='/' element = {<LandinPage/>}></Route>
            <Route path='/logIn' element ={<Login/>}></Route>   
            <Route path='/Cart' element = {<Cart/>}></Route>
            <Route path={`/products`} element={<Products/>} ></Route>
            <Route path={`/products/:id/name`} element={<Products/>} ></Route>
            <Route path={`/checkoutDetails`} element={<CheckoutDetails/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRouter
