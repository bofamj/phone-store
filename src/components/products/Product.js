import React from 'react'
import './product.css'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import {useGlobalContext} from '../../context';
import {  Outlet,Link } from "react-router-dom";



const Product = ({name,company,imageURL,price,rating,_id}) => {
    let newPrice = price.toLocaleString()
    const{addItem}=useGlobalContext()
    return (
        <div className='cart'>
            <div className='img-continert'>
                <img src={imageURL} alt={name} />
                <div className='add-tocart'   ><button className=' btn' value={_id} onClick={addItem}><MdOutlineAddShoppingCart /></button></div>
            </div>
             <div className='text-continer'>
                <h2>{name}</h2>
                <h3>${newPrice}</h3>
                <Link to={`/${_id}`}>
                <p className='mor'>MOR</p>
            </Link>
            </div> 
            
        </div>
    )
}

export default Product
