import shopping from '../asset/img/shopping.png'
import {useCartContext} from '../components/CartContext'
import { Link } from 'react-router-dom'
import "./NavBar.css";

function CartWidget (){
    const {countItems, itemsInCart, show } = useCartContext()
    
    return(
        // <Link className={"menu"} to='/cart'>Carrito</Link> 
        <div>
            {show ?
            <>
            <Link className="cart" to='/cart'><img src={shopping} className="shopping" alt="carrito" /></Link>
            {/* <img src={shopping} className="shopping" alt="carrito" /> */}
            {itemsInCart() ? (<></>) :<div className="pCartWidget"><span>{countItems()}</span></div>}
                    
            </>
            : 
            <>
            
            </>
        }
    
        </div>
    )
}
export default CartWidget 