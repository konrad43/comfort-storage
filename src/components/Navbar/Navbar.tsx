import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import style from './Navbar.module.scss';
import logo from '../../assets/comfort storage logo 1.png';

export const MainNavbar = () => (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" className={style.logo} />
                Comfort Storage
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
