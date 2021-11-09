
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { apiFetch } from '../services/apiFetch'
import "./item.css"

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        console.log('[ID]: ', id);
        if (id) {
            apiFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res.filter(prod => prod.categoria === id ))
                console.log(setProduct)
                console.log(product)
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

    return (
        <> 
            <div className='border border-2 border-primary'>
                <ItemList product={product} />  
            </div>           
        </>
    )
}

export default ItemListContainer

  