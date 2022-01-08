import {useGlobalContext} from '../../context';
import './saideBare.css'
import { ImCancelCircle } from 'react-icons/im';
import { BsCart4 } from 'react-icons/bs';

const SaideBar = () => {
    const{isOpen,setIsOpen}=useGlobalContext()
    return (
        <aside className='said-bar'>
            <ImCancelCircle className='cancel-btn' onClick={()=>setIsOpen(!isOpen)}/>
            <nav>
                <a href="#">Home</a>
                <a href="#">Project</a>
                <a href="#">AbotUs</a>
                <a href="#"><BsCart4/></a>
            </nav>
        </aside>
    )
}

export default SaideBar
