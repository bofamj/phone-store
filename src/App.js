import Nav from './components/nav/Nav'
import SaideBar from './components/side-bar/SaideBar'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Carts from './components/cart/Carts'
import SingelProduct from './components/products/SingelProduct'
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import {useGlobalContext} from './context';

function App() {
  const {isOpen,setIsOpen}=useGlobalContext()
  return (
    
      <div className="App">
        <Nav/>
        <div className={isOpen?'side side-opened':'side'}>
          {isOpen?<SaideBar/>:''}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Carts/>} />
          <Route path="/:id" element={<SingelProduct/>} />
        </Routes>
      </div>
    
  );
}

export default App;
