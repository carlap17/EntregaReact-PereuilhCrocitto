import './Item.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import React from 'react';

const Item = ( {producto} ) => {
    return (
            <Card className='CardItem'>
                <Card.Img src={producto.imagen} alt={producto.name} />
                <Card.Body>
                    <Card.Text>
                        <h5>{producto.name}</h5>
                        <p>Precio: ${producto.price}</p>
                        <p>Categoria: {producto.category}</p>
                    </Card.Text>
                    <button><Link to={`/item/${producto.id}`} className='Option'>Ver Detalles</Link></button>
                </Card.Body>
            </Card>
    )
}

export default Item;