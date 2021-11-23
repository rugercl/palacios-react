import shopping from '../asset/img/shopping.png'
import {useCartContext} from '../components/CartContext'
import { Link } from 'react-router-dom'
import "./NavBar.css";

function CartWidget (){
    const {countItems, itemsInCart, show } = useCartContext()
    
    return(
        <div>
            {show ?
            <>
            <Link className="cart" to='/cart'><img src={shopping} className="shopping" alt="carrito" /></Link>
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