import {createContext, useState, useContext} from 'react'


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    //Funcion que agrega un producto al carrito
    function agregarAlCarrito(items) { // [...cartList,items]        
        let datos = {
            id: items.producto.id, 
            title: items.producto.title, 
            price: items.producto.price, 
            cantidad: items.cantidad
        }
        const existe = cartList.some( produc=> produc.id===datos.id);
        if(existe){
            const product = cartList.map(product=>{
                if(product.id===datos.id){
                    product.cantidad ++;
                    return product;
                }
                
            })
            return product
        }else{
            setCartList([...cartList,datos])
        }

    }

    // funcion que agrega cierta cantidad de productos al carrito
    function addItem (item, cantidad) {
        agregarAlCarrito({
            producto: item,
            cantidad: cantidad
        })
    }

    // funcion que elimina un producto del carrito
    function removeItem (id) {
        const productos = cartList.filter(product=> product.id!==id)
        setCartList(productos)
    }

    // funcion que elimina todos los productos del carrito
    function clear () {
        setCartList([])
    }

    
    const mostrarListado =()=>{
        console.log(cartList)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            addItem,
            removeItem,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider