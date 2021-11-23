import {useCartContext} from '../components/CartContext'
import { getFirestore } from '../../src/services/firebase/firebase'
import firebase from "firebase";

const Formulario = ({ cart, total }) => {
    const {clearCarrito, countItems, precioTotal} = useCartContext()
    console.log(cart)
    console.log(total)

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
            items: cart,
            date: new Date().toString(),
            total: total,
          };
        console.log(newOrder)

        const orders = db.collection("orders");
        orders
          .add(newOrder)
          .then((res) => {
            orderId = res.id;
          })
          .catch((error) => {
            console.log("ERROR: " + error);
          });

          const itemsToCheck  =  db.collection("items").where(
            firebase.firestore.FieldPath.documentId(), "in", cart.map(item => item.id)
          );
          itemsToCheck.get().then((query) => {
            const batch = db.batch();
            const outStockItems = [];  
            query.docs.forEach((doc, index) => {
              if (doc.data().stock >= newOrder.items[index].cantidad) {
                batch.update(doc.ref, {
                  stock: doc.data().stock - newOrder.items[index].cantidad,
                });
              } else {
                outStockItems.push({ ...doc.data().items, id: doc.id });
              }
            });
      
      
          if (outStockItems.length === 0) {
            batch.commit().then(() => {
                alert(`Tu compra fue realizada, tu orden es ${orderId}`)
                clearCarrito()
              });
            } else {
              alert("ERROR: Hay items que ya no tienen stock suficiente.");
            }
          });
    

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