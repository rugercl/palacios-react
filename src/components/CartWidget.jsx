import shopping from '../asset/img/shopping.png'
import {useCartContext} from '../components/CartContext'
import "./NavBar.css";

function CartWidget (){
    const {countItems, itemsInCart, show } = useCartContext()
    
    return(
        
        <div>
            {show ?
            <>
            <img src={shopping} className="shopping" alt="carrito" />
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