import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
const AppContext = React.createContext()


const AppProvider = ({children})=>{
    const [isOpen,setIsOpen]=useState(false)
    const [product,setProduct]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [cardItem,setCardItem]=useState([])



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

    //*add to card click functionalty

        const addItem = e=>{
            const val = e.target.value
            
            const cartItem = product.filter((item)=>{
                if(item._id == val){
                    return item
                }
                
            })
            let cart = [...cardItem]
            //console.log(cartItem[0].name)
            //const {company,imageURL,name,price}=cartItem[0]
            cart.push(cartItem)
            setCardItem(cart)
            
            //console.log(cardItem);
        }
    
     useEffect(() =>{
        getAllProducts()
    },[]) 
    return(
        <AppContext.Provider value={{setIsOpen,isOpen,product,isLoading,addItem,cardItem}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}