import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom";
import Contact from './pages/Contact'
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
import ProductView from './pages/ProductView';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import "aos/dist/aos.css";
import NotFound from './pages/NotFound';
function App() {
  const [loading, setLoading] = useState(true);
 useEffect(()=>{
  AOS.init({
    duration: 2000,
    once: false,
    mirror: true,
  });

 },[])

  return (
   <>  
   <Header/>
   <ScrollToTop/>
   <BackToTop/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product-list' element={<ProductView/>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer/>
   </>
  );
}

export default App;
