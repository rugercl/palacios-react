import ItemCount from './ItemCount';

function ItemListContainer(props) {
    console.log(props)
    const {greeting}=props;
    return(
        <div>
            <p>{greeting}</p>
            <div>
            <ItemCount stock={5} initial={1}/> 

            </div>
        </div>
    )
    }

    export default ItemListContainer
  