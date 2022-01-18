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

const [quantity,setQuantity]=useState(1)

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

    //*add to card click functionalty

        const addItem = e=>{
            const val = e.target.value
            
            const cartItem = product.filter((item)=>{
                if(item._id == val){
                    return item
                }
                
            })
           // console.log(cartItem[0].price);
            
            //*posting the cart data to the database
                axios.post('http://localhost:3000/api/v1/cart',{
                name:cartItem[0].name,
                price:cartItem[0].price,
                imageURL:cartItem[0].imageURL,
            }
        
            ) 
        }

        //* deleting item from the cart
        const deleteItem = async (e)=>{
            const id = e.target.value;
            try {
                await axios.delete(`http://localhost:3000/api/v1/cart/${id}`)
                getCartProducts()
            }catch(error) {
                console.log(error);
            }
               
        }

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
      //console.log(product);
}  

//* geting the total amount and the total quantity of the cart

let {totalItem,cartTotal} = cardItem.reduce((total,cartItem)=>{
    const {quantity,price}=cartItem
    //*count items in cart

    total.totalItem += quantity
    total.cartTotal += quantity * price

    return total
},{
    totalItem:0,
    cartTotal:0
})
cartTotal = parseFloat(cartTotal.toFixed(3))
cartTotal=cartTotal.toLocaleString()


//* add and subtract cuntity funcionality

const addquantity = async (e)=>{
    const id = e.target.parentNode.value;
    //console.log(id);
     
    //console.log(newQuantity);
if(e.target.name == 'add'){
    setQuantity(quantity+= 1) 
}else{
    setQuantity(quantity-= 1)
}
console.log(quantity);
     try {
        await axios.patch(`http://localhost:3000/api/v1/cart/${id}`,{
            quantity:quantity
        })
        getCartProducts()
    } catch (error) {
        console.log(error);
    }  
    
}

    
    useEffect(() =>{
        getAllProducts()
    },[]) 
    return(
        <AppContext.Provider value={{setIsOpen,isOpen,product,isLoading,addItem,setIsLoading,getCartProducts,cardItem,deleteItem,totalItem,cartTotal,addquantity}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}





//!refrens
  
 /*try {
        setIsLoading(true);
        const allProducts =  axios.get('http://localhost:3000/api/v1/products');
        const cartProducts = axios.get('http://localhost:3000/api/v1/cart');
        axios.all([allProducts,cartProducts])
        .then(axios.spread((...response)=>{
            if(response[0].status === 200){
                setIsLoading(false)
                setProduct(response[0].data.products)
                console.log(response[0].data.products);
                console.log(product)
          }
           if(response[1].status === 200){
            setCartItemData(response[1].data.savedCart.products[0].product)
            console.log(cartItemData);
          } 
          setIsLoading(false)
        }))
        }catch (error) {
        console.log(error);
    
    }*/