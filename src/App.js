import Nav from './components/nav/Nav'
import SaideBar from './components/side-bar/SaideBar'
import Hearo from './components/hearo/Hearo'
import Products from './components/products/Products'
import Carts from './components/cart/Carts'
import './App.css';
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
      <Carts/>
    </div>
  );
}

export default App;
