import React from 'react'
import {useGlobalContext} from '../../context';
import Product from './Product'
import './product.css'
//import spener from '../../../public/spener.svg'
const Products = () => {
    const{product,isLoading}=useGlobalContext()

    if(isLoading){
        return <img src='../../../public/spener.svg' alt="" />
    }

    return (
        <section className='all-carts'>
            {product.map((product)=>{
                return <Product key={product._id} {...product}/>
            })}
        </section>
    )
}

export default Products
