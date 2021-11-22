import "./item.css";
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {useCartContext} from './CartContext'

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(0)
    
    const {agregarAlCarrito} = useCartContext()

    const onAdd =(cant)=>{
        setCount(cant)
        agregarAlCarrito({producto, cantidad: cant})
        
    }
    
    return(
        
        <>
          <div className="card" >
            <div className="card-header">
                <h3>{producto.title}</h3>
            </div><div className="card-body">                
                <img className="te-imag" src={producto.pictureUrl} alt='' />
                <p>$ {producto.price}</p>
            </div>            
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div></>
            
    )

   }


   export default ItemDetail