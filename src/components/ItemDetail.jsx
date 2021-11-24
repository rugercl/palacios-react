import "./item.css";
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {useCartContext} from './CartContext'
import {Link} from 'react-router-dom'

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(0)
    console.log(count)
    
    const {agregarAlCarrito} = useCartContext()

    const onAdd =(cant)=>{
        setCount(cant)
        agregarAlCarrito({producto, cantidad: cant})
        
    }
    
    return(
        
        <>
            <div className="card" >
                <div className="card-body">
                <h2>{producto.title}</h2>                
                    <img className="te-imag" src={producto.pictureUrl} alt='' />
                </div>  
            </div>
            <div className="card-detail">
                <div className="card-header2">
                    <h3>Detalles del Producto</h3>
                    <h4>{producto.description}</h4>
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    <Link to='/categoria/todos'>
                        <button className="btn btn-outline-secondary btn-block">Volver</button>
                    </Link>
                    <div className="precio">Precio : $ {producto.price}</div>
                    <div className="stock">Stock : {producto.stock}</div>
                </div>
            </div>
        </>
            
    )

   }


   export default ItemDetail