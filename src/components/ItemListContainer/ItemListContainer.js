import './ItemListContainer.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [titulo] = useState("Productos")
    const categoria = useParams().categoria

    useEffect(() => {
        const productosRef = collection(db, "Productos")

        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef


        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [categoria])

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer;