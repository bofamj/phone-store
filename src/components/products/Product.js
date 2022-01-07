import React from 'react'
import './product.css'
const Product = ({name,company,imageURL,price,rating}) => {
    return (
        <div className='cart'>
            <img src={imageURL} alt={name} />
            {/* <div>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div> */}
        </div>
    )
}

export default Product
