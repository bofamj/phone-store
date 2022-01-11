import Nav from './components/nav/Nav'
import SaideBar from './components/side-bar/SaideBar'
import Hearo from './components/hearo/Hearo'
import Products from './components/products/Products'
import Carts from './components/cart/Carts'
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
        <Hearo />
        <Products/>
        <Routes>
          <Route path="/cart" element={<Carts/>} />
        </Routes>
      </div>
    
  );
}

export default App;
