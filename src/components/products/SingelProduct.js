import React,{useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './product.css'
import {useGlobalContext} from '../../context';



const SingelProduct = () => {
    const{addItem}=useGlobalContext()
    const {id}=useParams()
    const [singelProduct,setSingelProduct]=useState([])
    const getSingelProducts= async()=>{
        try {
            const response = await axios(`http://localhost:3000/api/v1/products?_id=${id}`)
            const data = await response
            setSingelProduct(data.data.products)
        } catch (error) {
            console.log(error);
        }
    }  
    useEffect(() =>{
        getSingelProducts()
        
    },[]) 
    
  return (
            <div className='cart-raper'>
                {singelProduct.map(product =>{
                    const {company,description,imageURL,name,price,rating,_id}=product
                    return(
                        <div key={_id} className='page-contan'>
                            <div className='img'>
                                <img src={imageURL} alt={name} />
                            </div>
                            <div className='text-contin'>
                                <h1>{company} :  {name}</h1>
                                <p>{description}</p>
                                <div className='pric-rat'>
                                    <h3>${price} </h3>
                                    <h3>Rate : {rating}</h3>
                                </div>
                                <botton className='addTocart-btn'  onClick={addItem}  value={_id} >ADD TO CART</botton>
                            </div>
                        </div>
                    )
                })}
            </div>
  )
};

export default SingelProduct;
