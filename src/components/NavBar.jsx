import logo from '../logo.svg';
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
            <Link className={"menu"} to='/categoria/hierbas'>Infusiones Hierbas</Link>       
            <Link className={"menu"} to='/categoria/infusiones'>Infusiones Té</Link>       
            <Link className={"menu"} to='/cart'>Carrito</Link> 
            {/* <nav className={"menu"}> */}
            
                {/* <ul className={"menuUl"}>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/">Inicio</a>
                    </li>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/item/:id ">Variedad de Té</a>
                    </li>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/categoria/hierbas">Infusiones Hierbas</a>
                    </li>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/categhoria/infusiones">Infusiones Te</a>
                    </li>
                </ul> */}
                
            {/* </nav> */}
            <CartWidget/>
        </div>
    )
}

export default NavBar