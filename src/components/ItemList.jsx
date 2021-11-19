import Item from '../components/Item'
// import {useState, useEffect} from 'react'
// import {apiFetch} from '../services/apiFetch'
import "./item.css"

export default function ItemList({product}) {
    console.log(["itelist"],product)
    
    return (
        <div className="container">

                    {          
                            product.map(prod=> 
                                <Item key={prod.id} prod={prod}/>
                    )
                    }

        </div>
    )
}
   