import React from 'react'
import { FiMenu } from 'react-icons/fi';
import {useGlobalContext} from '../../context';
import { BsCart4 } from 'react-icons/bs';
import {  Outlet,Link } from "react-router-dom";

import './nav.css';
const Nav = () => {
    const{isOpen,setIsOpen,totalItem}=useGlobalContext()
    
    return (
        <header>
            <Link to="/"><h2>tec store</h2></Link>
            <nav>
                
                <Link to="/">Home</Link>
                <Link to="/cart"><BsCart4/><span className="qunt">{totalItem}</span></Link>
                {!isOpen?<FiMenu className="menu" onClick={()=>setIsOpen(!isOpen)}/>:''}
            </nav>
            <Outlet />
        </header>
    )
}

export default Nav
