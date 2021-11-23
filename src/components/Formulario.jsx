import {useCartContext} from '../components/CartContext'

const Formulario = ({ cart, total }) => {
    const {clearCarrito, countItems, precioTotal} = useCartContext()
    console.log(cart)
    console.log(total)

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const userData = {
          name: event.target.nombre.value + " " + event.target.apellido.value,
          phone: event.target.telefono.value,
          email: event.target.email.value,
        };
        console.log(userData)
    

    }

    return (
        <div className="col-md-6">
            <div>
                <h2>Terminar tu compra</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nombre" type="text" id="nombre" required/>
                    <input placeholder="Apellido" type="text" id="apellido" required/>
                    <input placeholder="Teléfono" type="number" id="telefono" required/>
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