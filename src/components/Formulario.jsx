import {useCartContext} from '../components/CartContext'
import { getFirestore } from '../../src/services/firebase/firebase'
import firebase from "firebase/app";
import "firebase/firestore";
import Swal from 'sweetalert2/src/sweetalert2.js'

const Formulario = ({ cart, total }) => {
    const {clearCarrito, countItems, precioTotal} = useCartContext()

    const handleSubmit = (event) => {
        event.preventDefault();
        let orderId;
        
        const db = getFirestore()
    
        //Captura de datos del cliente
        const userData = {
          name: event.target.nombre.value + " " + event.target.apellido.value,
          phone: event.target.telefono.value,
          email: event.target.email.value,
        };

        //Captura de datos del pedido
        const newOrder = {
            buyer: userData,
            items: cart.map(cartItem => {
              const id = cartItem.id;
              const nombre = cartItem.title;
              const precio = cartItem.price * cartItem.amount;
              
              return {id, nombre, precio}   
          }),
            date: new Date().toString(),
            total: total,
          };

        //Generar id del pedido
        const orders = db.collection("orders");
        orders
          .add(newOrder)
          .then((res) => {
            orderId = res.id;
          })
          .catch((error) => {console.log("ERROR: " + error);
          });

          const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.id)
        )
    
        const batch = db.batch();

        //actualizar cantidad de items y envia mensaje al cliente
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cart.find(item => item.id === docSnapshot.id).amount
                })
            })
            batch.commit().then((res) => {
                Swal.fire(`Tu compra fue realizada, tu orden es ${orderId}`)
                clearCarrito()
            });
        })


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
                Total: <span className="spanCart">${precioTotal()}</span> Pesos <br />
                Total de Productos:{" "}
                <span className="spanCart">{countItems()}</span>
                </p>
            </div>
        </div>
    )
    

}
export default Formulario;