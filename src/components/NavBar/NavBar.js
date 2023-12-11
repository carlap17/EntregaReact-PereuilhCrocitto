import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, nav, NavItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
        return (
        <nav className='NavBar'>
            <Link to='/'>
                <img src="https://carlap17.github.io/EntregaJavascript-PereuilhCrocitto/images/divanails1.jpg" className='logo' alt="Logo" />
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Semipermanente`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Semipermanente</NavLink>
                <NavLink to={`/category/Tradicional`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Tradicional</NavLink>
                <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Accesorios</NavLink>
                <NavLink to={`/category/Cabina`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Cabina</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;