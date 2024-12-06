import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import {Route,Routes, useLocation} from "react-router-dom";
import Contact from './pages/Contact'
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
import ProductView from './pages/ProductView';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import "aos/dist/aos.css";
import NotFound from './pages/NotFound';
import SiteBar from './dashboard/components/layout/Layout';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
 useEffect(()=>{
  AOS.init({
    duration: 2000,
    once: false,
    mirror: true,
  });
 },[])

  return (
    <>  
    {!isDashboard && <Header />}
    <ScrollToTop />
    <BackToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product-list' element={<ProductView />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/dashboard/*' element={<SiteBar />} />
    </Routes>

    {!isDashboard && <Footer />}
  </>
  );
}

export default App;
