import {useCartContext} from '../components/CartContext'

const Formulario = ({ cart, total }) => {
    const {clearCarrito, countItems, precioTotal} = useCartContext()
    console.log(cart)
    console.log(total)

    return (
        <div className="col-md-6">
            <div>
                <h2>Terminar tu compra</h2>
                <form>
                <input placeholder="Nombre" type="text" id="nombre" required/>
                <input placeholder="Apellido" type="text" id="apellido" required/>
                <input placeholder="Teléfono" type="tel" id="telefono" required/>
                <input placeholder="Email" type="email" id="email" required/>
                <button type="submit">Comprar</button>
                </form>
            </div>
            <div className="totalFinal">   
                <p className="pCart">
                Total: <span className="spanCart"></span> Pesos <br />
                Total de Productos:{" "}
                <span className="spanCart"></span>
                </p>
            </div>
        </div>
    )
    

}
export default Formulario;