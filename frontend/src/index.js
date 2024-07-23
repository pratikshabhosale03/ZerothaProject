import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
//import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './provider/AuthProvider';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Login';

import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
 // Adjust the path according to your folder structure




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>

    
  </Routes>
  <Footer />
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

