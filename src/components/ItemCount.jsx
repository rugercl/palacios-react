import React , {useState} from 'react';
import { Link } from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {

    //Hooks
    const [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
        setCambiarBoton(true)
    }

    return (
        <div className="w-50">
        <button className="btn btn-primary" onClick={handlerAdd}>+</button>
        <label>{count}</label>
        <button className="btn btn-primary" onClick={handlerRm}>-</button><br />


        { cambiarBoton ?
            <Link to='/cart'>
                <button className="btn btn-outline-primary btn-block"  >Terminar Compra</button> 
            </Link>

          :  
            <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button> 
        }
           
    
    </div> 
    );
  }

  export default ItemCount;
