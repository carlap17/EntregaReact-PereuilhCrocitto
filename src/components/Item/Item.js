import './Item.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

const Item = ({id, name, img, price, stock}) => {

    return (
        <article>
            <Card flex-column style={{ width: '18rem'}}>
                <Card.Img variant="top" src={img} alt={name} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <div>
                    <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                    <Card.Text>Stock: {stock}</Card.Text>
                    </div>

                    <Link to={`/item/${id}`} className='Option'>
                    Ver Detalles
                    </Link>
                </Card.Body>
            </Card>
        </article>
    )
}

export default Item;