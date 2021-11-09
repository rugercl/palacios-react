import Item from '../components/Item'
// import {useState, useEffect} from 'react'
// import {apiFetch} from '../services/apiFetch'
import "./item.css"

export default function ItemList({product}) {

    // const [product, setProduct] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     apiFetch
    //     .then( res => {        
    //         console.log('llamada a api')
    //         setProduct(res)
    //     })    
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))
       
       
    // },[])  
    return (
        // <div className="container">
        // {product.map(prod=> <Item  key={prod.id} prod={prod}/>)}
        // </div>

        //product.map(prod=> <Item key={prod.id} prod={prod} /> ) 
        <div className="container">

                    {          
                            product.map(prod=> 
                                <Item key={prod.id} prod={prod}/>
                    )
                    }

        </div>
    )
    
        
   }
   