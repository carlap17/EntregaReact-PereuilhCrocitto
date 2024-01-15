import './Checkout.css'
import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "Pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className="productos">
                <h1 className="main-title">¡Muchas gracias por su compra!</h1>
                <p>Su número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="productos">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
    
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />
    
                <button className="enviar" type="submit">Comprar</button>
    
            </form>
        </div>
    )
}

export default Checkout;