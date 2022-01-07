import React from 'react'
import {useGlobalContext} from '../../context';
import Product from './Product'
import './product.css'

const Products = () => {
    const{product,isLoading}=useGlobalContext()

    if(isLoading){
        return <h1>Loading</h1>
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
