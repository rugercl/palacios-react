// import React from 'react'
import "./item.css";

function ItemDetail (item) {
    const {datos}=item;
    console.log(datos)
    
    return(
        
        <>
        
        <div key={datos.id} className="card" >
            <div className="card-header">
                <h3>{datos.title}</h3>
            </div><div className="card-body">
                <img className="te-imag" src={require(`../asset/img/${datos.pictureUrl}.jpg`).default} alt='' />
                <p>$ {datos.price}</p>
            </div><div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                {datos.description}
                </button>
            </div>
        </div></>
            
    )

   }


export default ItemDetail