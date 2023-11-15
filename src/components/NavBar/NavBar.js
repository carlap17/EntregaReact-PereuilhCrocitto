import CartWidget from "./CartWidget/CartWidget";
import logo from './CartWidget/assets/logo.jpg';
import { Navbar, nav, NavItem } from 'react-bootstrap';

const NavBar = () => {
        return (
        <nav>
            <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
            <img src={logo} class="logo" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><span class="sr-only">Inicio</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Accesorios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Semipermanente</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tradicional</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cabinas</a>
                </li>
                </ul>
            </div>
            </nav>
            <h3>
                Tienda de Nail Art
            </h3>
            <div>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;