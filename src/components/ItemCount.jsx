import React , {useState} from 'react';

export default function ItemCount({stock, initial, onAdd}) {

    //Hooks
    const [count, setCount] = useState(initial);
    
    //Metodos
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }};
    const restar = () => {
        if(count > initial){
            setCount(count - 1)
        }
        };

    //Render
    return (
        
        <div classNameName="item-count">

            <form>
                    <span className="input-group-btn">
                        <button className="btn btn-default"  onClick={restar} type="button" disabled={count<1}>-</button>                    
                    </span>
                    <input  type="text"  className="form-control" value={count} align="center" disabled={true}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default"  onClick={sumar} type="button" disabled={count<1}>+</button>
                    </span>
                    <input type="submit" onClick={()=> onAdd(count)} value="Agregar Al Carrito" />
            </form>
        </div>
    );
  }
