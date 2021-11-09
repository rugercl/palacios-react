import {useState, useEffect} from 'react'
import {apiFetchUnProducto} from '../services/apiFetch'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiFetchUnProducto
        .then( res => { 
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))       
    },[])

    return (
        <div className="container">

                    { loading ? <h1>Cargando...</h1> : 
                                <ItemDetail producto={prod}/>                    
                    }

        </div>
    )
}

export default ItemDetailContainer