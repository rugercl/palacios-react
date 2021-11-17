import shopping from '../asset/img/shopping.png'
import {useCartContext} from '../components/CartContext'
import React, {useState} from 'react'
import "./NavBar.css";

function CartWidget (){
    const {countItems, itemsInCart } = useCartContext()
    const esconder = countItems() === 0 ? 'esconder' : ''
    
    console.log(countItems)

    return(
        <div>
            <img src={shopping} className="shopping" alt="carrito" />
            {itemsInCart() ? (<></>) :<div className="pCartWidget"><span>{countItems()}</span></div>}
        </div>
    )
}
export default CartWidget 