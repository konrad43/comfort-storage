import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import style from './Navbar.module.scss';
import logo from '../../assets/comfort storage logo 1.png';

export const MainNavbar = () => (
    <Navbar data-bs-theme="light" collapseOnSelect expand="lg" className={style.mobile}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" className={style.logo} />
                Comfort Storage
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" className={style.logo} />
                            Comfort Storage
                        </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={style.navBody}>
                    <Nav className="d-flex">
                        <Nav.Link className="mx-2" href="#locations">
                            Lokalizacje
                        </Nav.Link>
                        <Nav.Link className="mx-2" href="#features">
                            Cennik
                        </Nav.Link>
                        <Nav.Link className="mx-2" href="#pricing">
                            Kontakt
                        </Nav.Link>
                    </Nav>
                    <Button variant="danger">Rezerwuj teraz</Button>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
);
