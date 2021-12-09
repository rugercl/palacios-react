import {createContext, useState, useContext} from 'react'
const CartContext = createContext()
export const useCartContext = ()=> useContext(CartContext) 


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [show, setShow] = useState(true);
    

    //Funcion que agrega un producto al carrito
    function agregarAlCarrito(items) {  
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
            // eslint-disable-next-line array-callback-return
            const product = cartList.map(product=>{
                if(product.id===datos.id){
                    product.amount ++;
                    return product;
                }
                
            });
            return product
        }else{
            setCartList([...cartList,datos])
        }
    }
    
    const precioTotal = () => {
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
    const itemsInCart = () => cartList.length < 1;

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            removeItem,
            clearCarrito,
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