import React from 'react'
import './product.css'
 //MdOutlineAddShoppingCart



 
const Product = ({name,company,imageURL,price,rating}) => {
    return (
        <div className='cart'>
            <div className='img-continert'>
                <img src={imageURL} alt={name} />
            </div>
             <div className='text-continer'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div> 
        </div>
    )
}

export default Product
