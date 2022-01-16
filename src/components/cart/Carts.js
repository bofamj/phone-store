import React,{useState,useEffect} from 'react';
import {useGlobalContext} from '../../context';
import Cart from './Cart'
import {  Outlet,Link } from "react-router-dom";
import './cart.css'
import axios from 'axios';



const Carts = () => {
    const{setIsLoading,isLoading}=useGlobalContext()
    //*state for the cart product
    const [cardItem,setCardItem]=useState([])
    //*geting the cart items from the DB
const getCartProducts= async()=>{
    try {
     setIsLoading(true)
     const response = await axios('http://localhost:3000/api/v1/cart')
     const data = await response
     setIsLoading(false)
     //console.log(data.data.cartProduct);
     setCardItem(data.data.cartProduct)
     //console.log(cardItem);
    } catch (error) {
        console.log(error);
    }
      
      
 }  
 useEffect(() =>{
    getCartProducts()
},[]) 


        if(isLoading){
        return (
            <div className='cart-raper'>
                <h1>loading</h1>
            </div>
        )
        } 


     if(cardItem.length === 0){
        return(
            <section className='cart-raper'>
                <h1 className='no-item'>ther is no item in the cart last add some</h1>
                <Link to="/"><h1 className='no-item'>Home
                
                </h1></Link>
            </section>
            ) 
    } 
    return (
        <section className='cart-raper'>
            {cardItem.map((item)=>{
                return <Cart key={item._id} {...item}/>
            })}
        </section>
    )
}

export default Carts
