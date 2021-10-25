import React , {useState} from 'react';

export default function ItemCount({stock, initial}) {
    console.log(stock);
    console.log(initial);
    const [count, setCount] = useState(0);
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }};
    const restar = () => {
        if(count > initial){
            setCount(count - 1)
        }
        };

  return (
      
    <div classNameName="item-count">

        <form>
                <span className="input-group-btn">
                    <button className="btn btn-default"  onClick={restar} type="button">-</button>                    
                </span>
                <input  type="text"  className="form-control" value={count} min="1" max="5" align="center"/>
                <span className="input-group-btn">
                    <button className="btn btn-default"  onClick={sumar} type="button">+</button>
                </span>
                <input type="submit" value="Agregar Al Carrito" />
        </form>
    </div>
  );
  }
