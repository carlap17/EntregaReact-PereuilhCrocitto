import cart from "./assets/cart-check-fill.svg";

const CartWidget = () => {
    return (
        <div class="cart">
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget;