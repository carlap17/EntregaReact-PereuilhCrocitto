import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <article>
            <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src={img} alt={name} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <div>
                    <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    <Card.Text>Categoría: {category}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                    <Card.Text>Stock: {stock}</Card.Text>
                    </div>
                </Card.Body>

                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
                </footer>
            </Card>
        </article>
    )
}

export default ItemDetail;