import {createContext, useState, useContext} from 'react'


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

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

        console.log(cartList)
        // setCartList([
        //     ...cartList,
        //     product
        // ])
    }
    
    const mostrarListado =()=>{
        console.log(cartList)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider