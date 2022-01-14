import React,{useState} from 'react'
import {IoIosAddCircleOutline } from 'react-icons/io';
import {AiOutlineMinusCircle } from 'react-icons/ai';





const Cart = ({company,imageURL,name,price,_id}) => {
    //console.log(company);
    const [quantity,setQuantity]=useState(1)
    return (
        <div key={_id} className='card-contener'>
            <div className='img-continer'>
                <img src={imageURL} alt={name} />
            </div>
            <div className='paragraph-continer'>
                <h3>{name}</h3>
                <h4>{price}</h4>
                <div className='quantity-continer'>
                    <AiOutlineMinusCircle className='btn'/>
                    <p>{quantity}</p>
                    <IoIosAddCircleOutline className='btn'/>
                </div>
            </div>
        </div>
    )
}

export default Cart
