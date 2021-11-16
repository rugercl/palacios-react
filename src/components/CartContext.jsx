import {createContext, useState, useContext} from 'react'


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [show, setShow] = useState(true);
    const countItems = () => cartList.length;

    //Funcion que agrega un producto al carrito
    function agregarAlCarrito(items) { // [...cartList,items]    
        console.log(items.producto.pictureUrl)    
        let datos = 
        {
            id: items.producto.id,
            picture: items.producto.pictureUrl, 
            title: items.producto.title, 
            price: items.producto.price, 
            amount: items.cantidad
        }
        const existe = cartList.some( produc=> produc.id===datos.id);
        if(existe){
            const product = cartList.map(product=>{
                if(product.id===datos.id){
                    product.amount ++;
                    return product;
                }
                
            })
            return product
        }else{
            setCartList([...cartList,datos])
            console.log(cartList)
        }

    }

    // funcion que agrega cierta cantidad de productos al carrito
    function addItem (item, cantidad) {
        agregarAlCarrito({
            producto: item,
            amount: cantidad
        })
    }

    // funcion que elimina un producto del carrito
    const removeItem = (id) =>{
        console.log(id)
        const producto =  cartList.filter(producto=> producto.id !== id);
        setCartList({
            ...cartList, producto,
            countCarrito : cartList.amount - 1,
        })
        if(cartList.cantidad === 1){
            setShow(false)
        }
     }

    // funcion que elimina todos los productos del carrito
    function clear () {
        setCartList([])
    }

    //funcion que retorna verdadero o falso si el id se encuentra en el carrito
    function isInCart(id){
        if(cartList.some(product=> product.id===id)){
            return true
        }else{
            return false
        }
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
            clear,
            isInCart, 
            show,
            countItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider