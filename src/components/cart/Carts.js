import {useGlobalContext} from '../../context';
import Cart from './Cart'
const Carts = () => {
    const{cardItem}=useGlobalContext()
    return (
        <section>
            {cardItem.map((item)=>{
                
                return <Cart key={item[0]._id} {...item[0]}/>

            })}
        </section>
    )
}

export default Carts
