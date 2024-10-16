
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


function App() {
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
  </Routes>
  <Footer/>
   </>
  );
}

export default App;
