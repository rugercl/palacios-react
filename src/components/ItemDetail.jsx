import "./item.css";
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {useCartContext} from './CartContext'

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(0)

    
    const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
    
    console.log(cartList);
    console.log(mostrarListado);

    const onAdd =(cant)=>{
        console.log(cant)
        setCount(cant)
        agregarAlCarrito({producto, cantidad: cant})
        
    }
    
    return(
        
        <>
         <div key={producto.id} className="card" >
            <div className="card-header">
                <h3>{producto.title}</h3>
            </div><div className="card-body">
                <img className="te-imag" src={require(`../asset/img/${producto.pictureUrl}.jpg`).default} alt='' />
                <p>$ {producto.price}</p>
            </div><div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                {producto.description}
                </button>
            </div>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div></>
            
    )

   }


   export default ItemDetail