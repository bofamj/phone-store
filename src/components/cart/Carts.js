import React,{useState,useEffect} from 'react';
import {useGlobalContext} from '../../context';
import Cart from './Cart'
import {  Outlet,Link } from "react-router-dom";
import './cart.css'
import axios from 'axios';



const Carts = () => {
    const{setIsLoading,isLoading,getCartProducts,cardItem,cartTotal}=useGlobalContext()
    
    
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
                return <Cart key={item._id} {...item}  />
            })}
            <div className='cart-total'>
                <h2>total amount :</h2>
                <h3>${cartTotal}</h3>
            </div>
        </section>
    )
}

export default Carts
