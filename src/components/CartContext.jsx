import {createContext, useState, useContext} from 'react'


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [show, setShow] = useState(false);
    

    //Funcion que agrega un producto al carrito
    function agregarAlCarrito(items) { // [...cartList,items]    
        console.log(items.cantidad)    
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
    
    const precioTotal = () => {
        console.log(cartList)
        return cartList.reduce((acum, prod) => acum + (prod.amount * prod.price), 0)
        
    }
    
    // funcion que elimina un producto del carrito
    const removeItem = (id) => {
        return setCartList(cartList.filter(product => product.id !== id))
    }

    // funcion que elimina todos los productos del carrito
    const clearCarrito = () => {
        setCartList([])
        
    }

    //Funcion que indica la cantidad de elementos que hay en el carrito
    const countItems = () => {
        setShow(true)
        return cartList.reduce((acum, prod) => acum + (prod.amount), 0) 
               
    }  

    // console.log(["amount"],cartList.amount)
    const itemsInCart = () => cartList.length < 1;

    // funcion que agrega cierta cantidad de productos al carrito
    function addItem (item, cantidad) {
        agregarAlCarrito({
            producto: item,
            amount: cantidad
        })
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
            clearCarrito,
            isInCart, 
            countItems,
            precioTotal,
            itemsInCart,
            show
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider