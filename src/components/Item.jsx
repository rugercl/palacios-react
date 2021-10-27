

export default function Item(item) {
    // Item()

    const {datos}=item;
    console.log(datos)
    
    return(
        
        <>
        
        <div key={datos.id} className="card w-50 mt-5" >
            <div className="card-header">
                {datos.title}
            </div><div className="card-body">
                <img src={require('../../src/asset/img/acuario.jpg')} alt='' />
                {datos.price}
            </div><div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                {datos.description}
                </button>
            </div>
        </div></>
            
    )

   }
   