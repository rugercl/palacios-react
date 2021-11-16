import shopping from '../asset/img/shopping.png'
import {useCartContext} from '../components/CartContext'
import "./NavBar.css";

function CartWidget (){
    const {countCarrito } = useCartContext()
    console.log(countCarrito)
    return(
        <div>
            <img src={shopping} className="shopping" alt="carrito" />
            <p className='itemsTotal'>{countCarrito}</p>
        </div>
    )
}
export default CartWidget 