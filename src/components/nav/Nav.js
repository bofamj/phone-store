import React from 'react'
import { FiMenu } from 'react-icons/fi';
import {useGlobalContext} from '../../context';
import { BsCart4 } from 'react-icons/bs';

import './nav.css';
const Nav = () => {
    const{isOpen,setIsOpen}=useGlobalContext()
    return (
        <header>
            <h2>tec store</h2>
            <nav>
                
                <a href="#">Home</a>
                <a href="#">Project</a>
                <a href="#">AbotUs</a>
                <a href="#"><BsCart4/></a>
                {!isOpen?<FiMenu className="menu" onClick={()=>setIsOpen(!isOpen)}/>:''}
            </nav>
        </header>
    )
}

export default Nav
