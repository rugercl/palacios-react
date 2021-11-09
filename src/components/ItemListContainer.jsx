
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { apiFetch } from '../services/apiFetch'
import "./item.css"

function ItemListContainer() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    //     useEffect(() => {
    //     apiFetch
    //     .then( res => {        
    //         console.log('llamada a api')
    //         setProduct(res)
    //     })    
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))
       
       
    // },[])  

    useEffect(() => {
        if (id) {
            apiFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res.filter(prod => prod.categoria === id ))
                console.log(setProduct)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
        }else{
            apiFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
        }
    },[id]) 
      
    console.log(id);
    
    // const handleClick=(datoAgregado)=>{
    //     alert(`Has agregado la cantidad de ${datoAgregado}`)
    // }

    // const {greeting}=props;
    return(
        <> 
        <div className='border border-2 border-primary'>
            <ItemList product={product} />  
        </div>           
    </>
        // <div>
        //     <p>{greeting}</p>
        //     <div>
        //     <ItemCount stock={5} initial={1} onAdd={handleClick}/> 
        //     </div>
        //     <div className="wrapper">
        //         <ItemList/>
        //     </div>
        // </div>
    )
    }

    export default ItemListContainer
  