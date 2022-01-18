import React,{useState} from 'react'
import {IoIosAddCircleOutline } from 'react-icons/io';
import {AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios';
import {useGlobalContext} from '../../context';



const Cart = ({company,imageURL,name,price,_id,quantity}) => {
    const{deleteItem,addquantity}=useGlobalContext()
    let newPrice = price.toLocaleString()
    
    return (
        <div key={_id} className='card-contener'>
            <div className='img-continer'>
                <img src={imageURL} alt={name} />
            </div>
            <div className='paragraph-continer'>
                <h3>{name}</h3>
                <h4>${newPrice}</h4>
                <div className='quantity-continer'>
                    <button className='cart-btn' value={_id} name='subtract' onClick={addquantity}><AiOutlineMinusCircle className='btn' /></button>
                    <p>{quantity}</p>
                    <button className='cart-btn' value={_id} name='add' onClick={addquantity}><IoIosAddCircleOutline className='btn'/></button>
                </div>
                <div className='clear-cont'><button className='clear-btn' value={_id} onClick={deleteItem} >clear</button></div>
            </div>
        </div>
    )
}

export default Cart
