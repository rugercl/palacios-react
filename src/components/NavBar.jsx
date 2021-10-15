import logo from '../logo.svg';
import CartWidget from './CartWidget';
import "./NavBar.css";

function NavBar(){

    return(
        <div className={"main-menu"}>
            <img src={logo} className="App-logo" alt="logo"  />
            <span className={"brand"}>
                    <strong>Cuanto Té Quiero</strong>
            </span>
            <nav className={"menu"}>
            
                <ul className={"menuUl"}>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/">Inicio</a>
                    </li>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/">Variedades de Té</a>
                    </li>
                    <li className={"menuLi"}>
                        <a className={"menuA"} href="/">Infusiones</a>
                    </li>
                </ul>
                
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar