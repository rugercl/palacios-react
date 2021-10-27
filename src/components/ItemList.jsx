import Item from '../components/Item'
import {useState, useEffect} from 'react'
import {apiFetch} from '../services/apiFetch'

export default function ItemList() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiFetch
        .then( res => {        
            console.log('llamada a api')
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
       
       
    },[])  
    return (
        <>
            <tr>       
                <td>
                    { loading ? <h1>Cargando...</h1> :         
                            product.map(prod=> 
                                <Item datos={prod}/>
                    )
                    }
                </td>
            </tr>
        </>
    )
        
   }
   