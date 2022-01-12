import React from 'react'
import { FiMenu } from 'react-icons/fi';
import {useGlobalContext} from '../../context';
import { BsCart4 } from 'react-icons/bs';
import {  Outlet,Link } from "react-router-dom";

import './nav.css';
const Nav = () => {
    const{isOpen,setIsOpen}=useGlobalContext()
    return (
        <header>
            <h2>tec store</h2>
            <nav>
                
                <Link to="/">Home</Link>
                <a href="#">Project</a>
                <a href="#">AbotUs</a>
                <Link to="/cart"><BsCart4/></Link>
                {!isOpen?<FiMenu className="menu" onClick={()=>setIsOpen(!isOpen)}/>:''}
            </nav>
            <Outlet />
        </header>
    )
}

export default Nav
