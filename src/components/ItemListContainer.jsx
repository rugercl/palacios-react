import ItemCount from './ItemCount';
import ItemList from '../components/ItemList'
import "./item.css"

function ItemListContainer(props) {
    
    const handleClick=(datoAgregado)=>{
        alert(`Has agregado la cantidad de ${datoAgregado}`)
    }

    const {greeting}=props;
    return(
        <div>
            <p>{greeting}</p>
            <div>
            <ItemCount stock={5} initial={1} onAdd={handleClick}/> 
            </div>
            <div className="wrapper">
                <ItemList/>
            </div>
        </div>
    )
    }

    export default ItemListContainer
  