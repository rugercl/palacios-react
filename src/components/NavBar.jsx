import logo from '../logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import "./NavBar.css";

function NavBar(){

    return(
        <div className={"main-menu"}>
            <img src={logo} className="App-logo" alt="logo"  />
            <span className={"brand"}>
                    <strong>Cuanto Té Quiero</strong>
            </span>
            
            <Link className={"menu"} to='/'>Inicio</Link>
            <Link className={"menu"} to='/categoria/todos'>Productos</Link>
            <Link className={"menu"} to='/categoria/hierbas'>Infusiones Hierbas</Link>       
            <Link className={"menu"} to='/categoria/infusiones'>Infusiones Té</Link>
            <Link className={"menu"} to='/categoria/accesorios'>Accesorios para Té</Link>        

            <CartWidget/>
        </div>
    )
}

export default NavBar