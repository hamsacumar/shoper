import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shopcategory from './pages/Shopcategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Card from './pages/Card';
import Loginsignup from './pages/Loginsignup';
import Footer from './components/Footer/Footer'
import men_banner from "./Assets/banner_mens.png"
import women_banner from "./Assets/banner_women.png"
import kid_banner from './Assets/banner_kids.png'



function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner = {men_banner} category="mens"/>}/>
          <Route path='/womens' element={<Shopcategory banner = {women_banner} category="womens"/>}/>
          <Route path='/kids' element={<Shopcategory banner = {kid_banner} category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/card' element={<Card/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
