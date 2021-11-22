
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { getFirestore } from '../../src/services/firebase/firebase'
import "./item.css"

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        switch(id) {
            case 'todos':
                const dbQueryT= db.collection('items').orderBy('title', 'asc').get()
                dbQueryT
                .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            break;
            case 'hierbas':
                const dbQueryH= db.collection('items').where('category', '==', 'hierbas')                 
                .get()
                dbQueryH
                .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
            break;
            case 'infusiones':
                const dbQueryI= db.collection('items').where('category', '==', 'infusiones').get()
                dbQueryI
                .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))

            break;
            case 'accesorios':
                const dbQueryA= db.collection('items').where('category', '==', 'accesorios').get()
                dbQueryA
                .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))

            break;
            default:
        }
    },[id])
 
    return (
        <> 
            <div className='border border-2 border-primary'>
            { loading ? <h1>Cargando...</h1> : 
                <ItemList product={product} />  
            }
            </div>           
        </>
    )
}

export default ItemListContainer

  