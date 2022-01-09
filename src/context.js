import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
const AppContext = React.createContext()


const AppProvider = ({children})=>{
    const [isOpen,setIsOpen]=useState(false)
    const [product,setProduct]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const url = '/api/v1/products'
     const getAllProducts= async()=>{
       try {
        setIsLoading(true)
        const response = await fetch('http://localhost:3000/api/v1/products')
        const data = await response.json()
        setIsLoading(false)
    
        setProduct(data.products)
       } catch (error) {
           console.log(error);
       }
         
         
    } 
    console.log(product)
    
     useEffect(() =>{
        getAllProducts()
    },[]) 
    return(
        <AppContext.Provider value={{setIsOpen,isOpen,product,isLoading}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}