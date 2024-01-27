import './CartWidget.css';
import React from "react";
import cart from "./assets/cart-check-fill.svg";
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart' className='CartWidget'>
                <img className='CartImg' src={cart} alt='cart-widget'/>
                <span class="numero">{ cantidadEnCarrito() }</span>    
            </Link>
        </div>
    )
}

export default CartWidget;