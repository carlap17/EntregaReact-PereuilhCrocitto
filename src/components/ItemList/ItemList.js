import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ( { productos } ) => {
    return(
        <div className='productos'>
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList;