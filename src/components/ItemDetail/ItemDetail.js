import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <article>
            <Card className='CardItem'>
                <Card.Img src={item.imagen} alt={item.name} />

                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>

                    <div>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>Categoría: {item.category}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                        <Card.Text>Stock: {item.stock}</Card.Text>
                    </div>
                </Card.Body>

                <ItemCount
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={() => { agregarAlCarrito (item, cantidad) }}
                />
            </Card>
        </article>
    )
}

export default ItemDetail;