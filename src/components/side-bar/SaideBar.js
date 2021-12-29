import {useGlobalContext} from '../../context';
import './saideBare.css'
import { ImCancelCircle } from 'react-icons/im';

const SaideBar = () => {
    const{isOpen,setIsOpen}=useGlobalContext()
    return (
        <aside className='said-bar'>
            <ImCancelCircle className='cancel-btn' onClick={()=>setIsOpen(!isOpen)}/>
            <nav>
                <a href="#">Home</a>
                <a href="#">Project</a>
                <a href="#">AbotUs</a>
            </nav>
        </aside>
    )
}

export default SaideBar
