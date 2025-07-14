import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../pages/footer/Footer';

// Lazy load components
const TravelBlog = lazy(() => import('../pages/TravelBlog'));
const Hotels = lazy(() => import('../pages/Hotels'));
const HotelDetails = lazy(() => import('../pages/HotelDetails'));
const FavoriteHotel = lazy(() => import('../pages/favhotel/FavoriteHotel'));
const About = lazy(() => import('../components/About/About'));
const Blogdetails = lazy(() => import('../components/Blogdetails'));
const Signup = lazy(() => import('../pages/forms/Signup'));
const Login = lazy(() => import('../pages/forms/Login'));
const Help = lazy(() => import('../pages/Help'));

const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<TravelBlog />} />
            <Route path='/travelblog' element={<TravelBlog />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/hotelsdetails/:id' element={<HotelDetails />} />
            <Route path='/blogdetails/:id' element={<Blogdetails />} />
            <Route path='/favoritehotel' element={<FavoriteHotel />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/help' element={<Help />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
