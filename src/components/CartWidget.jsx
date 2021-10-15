import shopping from '../asset/img/shopping.png'
import "./NavBar.css";

function CartWidget (){
    //const objStyle = {maxWidth: 10};
    return(
        <div>
            <img src={shopping} className="shopping" alt="carrito" />
        </div>
    )
}
export default CartWidget 