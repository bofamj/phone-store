import {useGlobalContext} from '../../context';
import './saideBare.css'
import { ImCancelCircle } from 'react-icons/im';
import { BsCart4 } from 'react-icons/bs';
import {  Outlet,Link } from "react-router-dom";

const SaideBar = () => {
    const{isOpen,setIsOpen,totalItem}=useGlobalContext()
    return (
        <aside className='said-bar'>
            <ImCancelCircle className='cancel-btn' onClick={()=>setIsOpen(!isOpen)}/>
            <nav>
                <Link to="/">Home</Link>
                <a href="#">Project</a>
                <a href="#">AbotUs</a>
                <div className='cart-rap'>
                    <Link to="/cart"><BsCart4/><span className="qunt-sind">{totalItem}</span></Link>
                </div>
            </nav>
        </aside>
    )
}

export default SaideBar
