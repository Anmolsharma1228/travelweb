import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TravelBlog from '../pages/TravelBlog'
import Hotels from '../pages/Hotels'
import HotelDetails from '../pages/HotelDetails'
import FavoriteHotel from '../pages/favhotel/FavoriteHotel'
import Navbar from '../components/Navbar'
import Footer from '../pages/footer/Footer'
import About from '../components/About/About'
import Blogdetails from '../components/Blogdetails'
import Signup from '../pages/forms/Signup'
import Login from '../pages/forms/Login'
import Help from '../pages/Help'


const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<TravelBlog />}></Route>
        <Route path='/travelblog' element={<TravelBlog />}></Route>
        <Route path='/Hotels' element={<Hotels />}></Route>
        <Route path='/hotelsdetails/:id' element={<HotelDetails />}></Route>
        <Route path='/blogdetails/:id' element={<Blogdetails />}></Route>
        <Route path='/favoritehotel' element={<FavoriteHotel />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/help' element={<Help/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Router;