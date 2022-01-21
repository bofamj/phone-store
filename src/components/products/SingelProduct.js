import React,{useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './product.css'



const SingelProduct = () => {
    const {id}=useParams()
    const [singelProduct,setSingelProduct]=useState([])
    console.log(id);
    const getSingelProducts= async()=>{
        try {
            //setIsLoading(true)
            const response = await axios(`http://localhost:3000/api/v1/products?_id=${id}`)
            const data = await response
            //setIsLoading(false)
            setSingelProduct(data.data.products)
           // console.log(data.data.products)
        } catch (error) {
            console.log(error);
        }
          console.log(singelProduct);
    }  
    useEffect(() =>{
        getSingelProducts()
        
    },[]) 
    
  return (
            <div className='cart-raper'>
                {singelProduct.map(product =>{
                    const {company,description,imageURL,name,price,rating,_id}=product
                    return(
                        <div key={_id}>
                            <div>
                                <img src={imageURL} alt={name} />
                            </div>
                            <div>
                                <h1>{company}:{name}</h1>
                                <p>{description}</p>
                                <h3>{price}</h3>
                                <h4>{rating}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
  )
};

export default SingelProduct;
