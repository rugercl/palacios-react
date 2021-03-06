import "./item.css";
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
     
    return(
        <>
        <div className="card" >
            <div className="card-header">
                <h3>{prod.title}</h3>
            </div><div className="card-body">
                {/* <img className="te-imag" src={require(`../asset/img/${prod.pictureUrl}.jpg`).default} alt='' /> */}
                <img className="te-imag" src={prod.pictureUrl} alt='' />
                <p>$ {prod.price}</p>
            </div><div className="card-footer">
            <Link to={`/item/${prod.id}`}>
                <button className="btn btn-outline-primary btn-block text-descrip">
                    {prod.description}
                </button>
            </Link>
            <div className="stock">Stock : {prod.stock}</div>
            </div>
        </div></>
    )
   }

   export default Item;
//    
   