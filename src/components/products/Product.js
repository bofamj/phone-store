import React from 'react'
import './product.css'
import { MdOutlineAddShoppingCart } from 'react-icons/md';





const Product = ({name,company,imageURL,price,rating}) => {
    return (
        <div className='cart'>
            <div className='img-continert'>
                <img src={imageURL} alt={name} />
                <div className='add-tocart'><MdOutlineAddShoppingCart /></div>
            </div>
             <div className='text-continer'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div> 
        </div>
    )
}

export default Product
