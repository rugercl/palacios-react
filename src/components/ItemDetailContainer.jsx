import {useState, useEffect} from 'react'
// import {apiFetchUnProducto} from '../services/apiFetch'
import {getFirestore} from '../../src/services/firebase/firebase'
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    const  {id} = useParams();

    useEffect(() => {
        const db= getFirestore()
        db.collection('items').doc(id).get()
        .then(resp => setProd({id: resp.id, ...resp.data()})) 
        if(id){
            db.collection('items').doc(id).get()
            .then(resp => setProd({id: resp.id, ...resp.data()})) 
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

        }

        // apiFetchUnProducto(id)       
        // .then( res => { 
        //     setProd(res)
        //     console.log(res)
        // })    
        // .catch(err => console.log(err))
        // .finally(()=> setLoading(false))       
    }, [id])

    return (
        <div className="container">
            {/* <ItemDetail producto={prod}/>  */}

                    { loading ? <h1>Cargando...</h1> : 
                                <ItemDetail producto={prod}/>                    
                    }

        </div>
    )
}

export default ItemDetailContainer