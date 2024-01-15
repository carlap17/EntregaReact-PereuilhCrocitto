import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return ( 
        <div className='productos'>
                <h1 className="main-title">Carrito</h1>

                {
                    carrito.map((producto) => (
                        <div key={producto.id} className='CardItem'>
                            <img src={producto.imagen} alt={producto.name} />
                            <h4>{producto.name}</h4>
                            <p>Precio unit: ${producto.price}</p>
                            <p>Precio total: ${producto.price * producto.cantidad}</p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <br />
                        </div>
                    ))
                }

                {  
                    carrito.length > 0 ?
                    <>
                        <div className='CardItem'>
                            <h2>Precio total: ${ precioTotal() }</h2>
                            <button onClick={handleVaciar}>Vaciar</button>
                            <button><Link to="/checkout">Finalizar compra</Link></button>
                        </div>
                    </> :
                    <h2>El carrito no tiene productos</h2>
                }        
        </div>
        )
}

export default Cart;