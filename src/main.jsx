import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage.jsx';
import SignUp from './landing_page/signup/SignUp.jsx';
import Product from './landing_page/product/Products.jsx';
import About from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Navabar from './landing_page/home/Navbar.jsx';
import Footer from './Footer.jsx';
import Login from './landing_page/login/login.jsx';
import NotFound from './NotFound.jsx';
import "react-toastify/ReactToastify.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navabar/>
    <Routes>
      <Route path="/" element={<HomePage />}>  </Route>
      <Route path="/signup" element={<SignUp />}>  </Route>
      <Route path="/products" element={<Product />}>  </Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/about" element={<About />}>  </Route>
      <Route path="/pricing" element={<PricingPage />}>  </Route>
      <Route path="/support" element={<SupportPage />}>  </Route>
      <Route path="/*" element={<NotFound />}>  </Route>



    </Routes>
    <Footer/>
  </BrowserRouter>
  
) 
  
