import React,{useState} from 'react'
import {IoIosAddCircleOutline } from 'react-icons/io';
import {AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios';




const Cart = ({company,imageURL,name,price,_id},getCartProducts) => {
    //console.log(company);
    const [quantity,setQuantity]=useState(1)

    const deleteItem = async (e)=>{
        const id = e.target.value;
        try {
            await axios.delete(`http://localhost:3000/api/v1/cart/${id}`)
            getCartProducts()
        }catch(error) {
            console.log(error);
        }
           console.log(`yoclocked`);
    }
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
                <div className='clear-cont'><button className='clear-btn' value={_id} onClick={deleteItem} >clear</button></div>
            </div>
        </div>
    )
}

export default Cart
