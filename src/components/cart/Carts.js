import {useGlobalContext} from '../../context';
import Cart from './Cart'
import {  Outlet,Link } from "react-router-dom";
import './cart.css'



const Carts = () => {
    const{cardItem}=useGlobalContext()
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
                
                return <Cart key={item._id}  {...item[0]}/>

            })}
        </section>
    )
}

export default Carts
