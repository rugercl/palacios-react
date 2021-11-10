import {useState, useEffect} from 'react'
import {apiFetchUnProducto} from '../services/apiFetch'
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    const  {id} = useParams();

    useEffect(() => {
        apiFetchUnProducto(id)       
        .then( res => { 
            setProd(res)
            console.log(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))       
    }, [prod])
    //console.log('[params]',useParams());
    //console.log('[params]',this.prod.match.params.id)

    return (
        <div className="container">

                    { loading ? <h1>Cargando...</h1> : 
                                <ItemDetail producto={prod}/>                    
                    }

        </div>
    )
}

export default ItemDetailContainer