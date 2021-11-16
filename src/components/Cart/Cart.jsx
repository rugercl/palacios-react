import React from 'react'
import "./Cart.css";
import {useCartContext} from '../CartContext'
import Table from 'react-bootstrap/Table'

const Cart = () => {

    const {cartList, removeItem} = useCartContext()
    console.log(cartList)

    
    return (
        <div className="carrito">
        <h1>Carrito de Compras</h1>
        
        {cartList.map(prod=>
        
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Sub-Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img width="50" src ={(`../../asset/img/{prod.picture}.jpg`).default} alt=""/></td>
                <td>{prod.title}</td>
                <td>{prod.amount}</td>
                <td>${prod.price}</td>
                <td>${prod.price*prod.amount}</td>
                <td><button className="btn-carrito-eliminar" onClick={()=>removeItem(prod.id)}>Eliminar</button></td>
            </tr>
        </tbody>
        </Table>
        )}
    </div>
        // <div className="carrito">
        //     <h1>Carrito de Compras</h1>
        //     {cartList.map(prod=><li>{prod.title}</li>)}
        // </div>
    )
}

export default Cart