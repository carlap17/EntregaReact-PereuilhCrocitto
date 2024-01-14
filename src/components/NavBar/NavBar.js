import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-primary">
            <Container fluid>
                <Navbar.Brand href="/"><img src="https://carlap17.github.io/EntregaJavascript-PereuilhCrocitto/images/divanails1.jpg" className='logo' alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/category/Accesorios" className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="/category/Cabinas" className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                            Cabinas
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/category/Semipermanente" className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                            Esmalte Semipermanente
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/category/Tradicional" className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                            Esmalte Tradicional
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/cart"><CartWidget /></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Buscar producto" className="me-2" aria-label="Search"/>
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;