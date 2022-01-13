import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
const AppContext = React.createContext()


const AppProvider = ({children})=>{
    //*state for the sid nav
    const [isOpen,setIsOpen]=useState(false)
    //*state for the all product
    const [product,setProduct]=useState([])
    //*state for the product loding
    const [isLoading,setIsLoading]=useState(false)
    //*state for the cart product
    const [cardItem,setCardItem]=useState([])


//*giting the data from the data base
      const getAllProducts= async()=>{
       try {
        setIsLoading(true)
        const response = await axios('http://localhost:3000/api/v1/products')
        const data = await response
        setIsLoading(false)
        setProduct(data.data.products)
        
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
            cart.push(cartItem)
            setCardItem(cart)
            //*posting the cart data to the database
                axios.post('http://localhost:3000/api/v1/cart',{
                    products:[
        {
            product:cartItem,
            
        }
    ],
                
            } 
        
            ) 
        }
        
        //console.log(cardItem.price) 

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