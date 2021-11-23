import React from 'react'
import "./Cart.css";
import {useCartContext} from '../CartContext'
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom";
import Formulario from '../Formulario';

const Cart = () => {
    const {cartList, clearCarrito, precioTotal, removeItem, itemsInCart} = useCartContext()


    return itemsInCart () ? (
        <div className="cartNoItems">
            <h5>No hay compras en el carrito..</h5>{" "}
            <Link to="/">
            <button className="btnBack">Volver al home</button>
            </Link>
        </div>
    ) : (
        <div className="carrito">
        <h1>Carrito de Compras</h1>
        <Table striped bordered hover size="sm" className="table">
        <thead className="thead">
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Sub-Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody className="tbody">
            {cartList.map(prod=>
                <tr>
                    <td><img width="50" src={prod.picture} alt=""/></td>
                    <td>{prod.title}</td>
                    <td>{prod.amount}</td>
                    <td>${prod.price}</td>
                    <td>${prod.price*prod.amount}</td>
                    <td><button className="btn-carrito-eliminar" onClick={()=>removeItem(prod.id)}>Eliminar Item</button></td>
                </tr>
            )}
        </tbody>
        <tfoot className="tfoot">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Precio Total</td>                
                <td>${precioTotal()}</td>
                <td><button className="btn-carrito-eliminar" onClick={()=>clearCarrito()}>Borrar el Carrito</button></td>
            </tr>
        </tfoot>
        </Table>
        <Formulario cart={cartList} total={precioTotal()}/>
        
    </div>
    
    );
}

export default Cart